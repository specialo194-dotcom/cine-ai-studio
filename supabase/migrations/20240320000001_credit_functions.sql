-- 20240320000001_credit_functions.sql

create or replace function public.increment_credits(u_id uuid, amount integer)
returns void as $$
begin
  update public.user_credits
  set balance = balance + amount,
      updated_at = now()
  where user_id = u_id;
end;
$$ language plpgsql security definer;

-- Function to check and deduct credits
create or replace function public.deduct_credits(u_id uuid, amount integer)
returns boolean as $$
declare
  current_balance integer;
begin
  select balance into current_balance
  from public.user_credits
  where user_id = u_id;

  if current_balance >= amount then
    update public.user_credits
    set balance = balance - amount,
        updated_at = now()
    where user_id = u_id;
    return true;
  else
    return false;
  end if;
end;
$$ language plpgsql security definer;