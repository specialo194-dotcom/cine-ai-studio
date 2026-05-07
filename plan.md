
# VisionForge AI - Technical Manifest & Agent Assignments

## 1. Project Overview
A modern full-stack AI SaaS platform ("VisionForge AI") with enterprise-grade architecture, cinematic UI, and scalable cloud infrastructure. Key features include advanced text-to-video, image-to-video, and video-to-video generation.

## 2. Core Stack & Technologies
- **Frontend:** Next.js 15, TypeScript, TailwindCSS, Framer Motion
- **Backend:** Node.js (Express/FastAPI), Python microservices
- **Database:** PostgreSQL
- **Auth:** JWT, OAuth (Google Login)
- **Storage:** AWS S3 / Cloudflare R2
- **Queue:** Redis + BullMQ
- **AI Inference:** Python microservices (SD Video, Wan 2.1, CogVideoX, AnimateDiff, Open-Sora compatible)
- **Realtime:** WebSockets
- **Payments:** Stripe Subscriptions
- **Deployment:** Docker, Kubernetes, Terraform, GitHub Actions CI/CD

## 3. Agent Assignments & Responsibilities

### 3.1. Architect (Lead Solutions Architect)
- **Role:** Orchestrate development, create initial plan, delegate tasks, ensure `generate_images_bulk` is run by Frontend, coordinate final `validate_build`.

### 3.2. Supabase Engineer
- **Focus:** Database & Authentication Foundation
    - **Tasks:**
        - Design and implement PostgreSQL schema.
        - Set up JWT, OAuth, Google Login authentication flows.
    - **Trigger:** Early stage after initial planning.

### 3.3. Frontend Engineer
- **Focus:** User Interface & User Experience
    - **Tasks:**
        - Develop Next.js frontend with TypeScript, TailwindCSS, Framer Motion.
        - Implement cinematic dark UI, Glassmorphism, animated gradients.
        - Build AI Studio Dashboard, drag-and-drop, timeline editor, mobile responsiveness.
        - Develop Landing Page, User Dashboard, Story Mode UI.
        - Implement core generation feature interfaces (Text-to-Video, Image-to-Video, Video-to-Video).
    - **Critical Prerequisite:** MUST run `generate_images_bulk` for UI assets *before* writing any code files.
    - **Trigger:** After initial plan and database foundation.

### 3.4. Backend Engineer
- **Focus:** Core Logic, AI Orchestration, Infrastructure, APIs
    - **Tasks:**
        - Develop Node.js/Express or Python/FastAPI backend APIs.
        - Implement AI inference orchestration (Python microservices).
        - Integrate Redis/BullMQ, WebSockets, Stripe, Cloud Storage.
        - Build Prompt Engineering Assistant, Mobile App APIs.
        - Generate Dockerfiles, Kubernetes configs, Terraform, CI/CD pipelines.
        - Implement security, admin panel, export system.
        - Document APIs, environment variables, workflows, architecture, cost optimization, moderation, monetization.
    - **Trigger:** After initial plan and database foundation.

## 4. Development Workflow Summary
1.  **Planning:** Architect creates `plan.md` and checks sandbox state.
2.  **Foundation:** Supabase Engineer sets up DB schema & Auth.
3.  **Frontend Dev:** Frontend Engineer builds UI/UX (after `generate_images_bulk`).
4.  **Backend Dev:** Backend Engineer builds APIs, AI, Infra.
5.  **Integration & Validation:** Connect components, run `validate_build`.

## 5. Key Deliverables
- Functional Frontend App
- Functional Backend Services
- PostgreSQL Schema Design
- API Documentation & Runtime Examples
- Authentication & Billing Systems
- Admin Dashboard
- Deployment Configurations & Instructions
- Architecture Diagrams & Documentation
