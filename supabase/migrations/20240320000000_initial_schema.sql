-- 20240320000000_initial_schema.sql

-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- 1. PROFILES
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique,
  full_name text,
  avatar_url text,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  constraint username_length check (char_length(username) >= 3)
);

alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone." on public.profiles
  for select using (true);

create policy "Users can insert their own profile." on public.profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on public.profiles
  for update using (auth.uid() = id);

-- 2. CREDITS
create table if not exists public.user_credits (
  user_id uuid references auth.users on delete cascade primary key,
  balance integer default 0 not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.user_credits enable row level security;

create policy "Users can view own credits." on public.user_credits
  for select using (auth.uid() = user_id);

-- 3. PROJECTS
create table if not exists public.projects (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  name text not null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists projects_user_id_idx on public.projects (user_id);

alter table public.projects enable row level security;

create policy "Users can manage their own projects." on public.projects
  for all using (auth.uid() = user_id);

-- 4. RENDERS (AI Generation Tasks)
create table if not exists public.renders (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  project_id uuid references public.projects on delete cascade,
  status text not null default 'pending', -- pending, processing, completed, failed
  type text not null, -- text-to-video, image-to-video, etc.
  input_params jsonb not null default '{}'::jsonb,
  output_url text,
  error_message text,
  model_id text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  completed_at timestamp with time zone
);

create index if not exists renders_user_id_idx on public.renders (user_id);
create index if not exists renders_project_id_idx on public.renders (project_id);

alter table public.renders enable row level security;

create policy "Users can view their own renders." on public.renders
  for select using (auth.uid() = user_id);

create policy "Users can create renders." on public.renders
  for insert with check (auth.uid() = user_id);

-- 5. ASSETS
create table if not exists public.assets (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  project_id uuid references public.projects on delete cascade,
  name text,
  url text not null,
  type text not null, -- image, video, audio
  size integer,
  metadata jsonb default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists assets_user_id_idx on public.assets (user_id);

alter table public.assets enable row level security;

create policy "Users can manage their own assets." on public.assets
  for all using (auth.uid() = user_id);

-- 6. SUBSCRIPTIONS (Basic mapping for Stripe)
create table if not exists public.subscriptions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null unique,
  stripe_customer_id text,
  stripe_subscription_id text,
  plan_id text, -- free, creator, pro, studio
  status text,
  current_period_end timestamp with time zone
);

alter table public.subscriptions enable row level security;

create policy "Users can view own subscription." on public.subscriptions
  for select using (auth.uid() = user_id);

-- TRIGGERS FOR AUTO-PROFILE AND CREDITS ON SIGNUP
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');

  insert into public.user_credits (user_id, balance)
  values (new.id, 10); -- 10 free credits for new users

  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();