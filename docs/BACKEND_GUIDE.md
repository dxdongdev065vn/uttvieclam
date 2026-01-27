# Hướng Dẫn Backend - Mạng Lưới Tài Năng UTT

> Tài liệu hướng dẫn triển khai backend cho website Mạng lưới Tài năng Trường Đại học Công nghệ GTVT

---

## Mục lục

1. [Kiến trúc hệ thống](#1-kiến-trúc-hệ-thống)
2. [Database Schema](#2-database-schema)
3. [API Endpoints](#3-api-endpoints)
4. [Xác thực và Phân quyền](#4-xác-thực-và-phân-quyền)
5. [Hướng dẫn kết nối Supabase](#5-hướng-dẫn-kết-nối-supabase)
6. [Edge Functions](#6-edge-functions)
7. [Storage](#7-storage)
8. [React Hooks](#8-react-hooks)
9. [Checklist triển khai](#9-checklist-triển-khai)

---

## 1. Kiến trúc hệ thống

### Tổng quan

```
┌─────────────────────┐      ┌──────────────────────┐      ┌─────────────────────┐
│   React Frontend    │      │   Supabase Client    │      │      Supabase       │
│   (Vite + TS)       │◄────►│   @supabase/js       │◄────►│   - PostgreSQL      │
│                     │      │                      │      │   - Auth            │
│   - React Query     │      └──────────────────────┘      │   - Storage         │
│   - React Router    │               │                    │   - Realtime        │
│   - Tailwind CSS    │               │                    └─────────────────────┘
└─────────────────────┘               │                              │
                                      ▼                              ▼
                          ┌──────────────────────┐      ┌─────────────────────┐
                          │   Edge Functions     │      │   External APIs     │
                          │   (Deno Runtime)     │◄────►│   - Email (Resend)  │
                          │                      │      │   - AI (OpenAI)     │
                          │   - apply-job        │      │   - PDF Generation  │
                          │   - generate-cv-pdf  │      └─────────────────────┘
                          │   - send-contact     │
                          └──────────────────────┘
```

### Công nghệ sử dụng

| Layer | Technology | Mô tả |
|-------|------------|-------|
| Frontend | React 18 + Vite + TypeScript | SPA với hot reload |
| Styling | Tailwind CSS + shadcn/ui | Component library |
| State | React Query (TanStack Query) | Server state management |
| Routing | React Router v6 | Client-side routing |
| Backend | Supabase | BaaS (Backend as a Service) |
| Database | PostgreSQL | Relational database |
| Auth | Supabase Auth | JWT-based authentication |
| Storage | Supabase Storage | File storage |
| Functions | Supabase Edge Functions | Serverless Deno runtime |

---

## 2. Database Schema

### Entity Relationship Diagram

```
┌─────────────────┐
│   auth.users    │
│   (Supabase)    │
└────────┬────────┘
         │
         │ 1:1
         ▼
┌─────────────────┐       ┌─────────────────┐
│   candidates    │───────│   user_roles    │
└────────┬────────┘       └─────────────────┘
         │
         │ 1:N
         ▼
┌─────────────────┐       ┌─────────────────┐
│      cvs        │       │  job_applications│
└─────────────────┘       └────────┬────────┘
                                   │
                                   │ N:1
                                   ▼
┌─────────────────┐       ┌─────────────────┐
│   companies     │───────│      jobs       │
└─────────────────┘  1:N  └─────────────────┘

┌─────────────────┐       ┌─────────────────┐
│      news       │       │     events      │
└─────────────────┘       └─────────────────┘

┌─────────────────┐
│contact_submissions│
└─────────────────┘
```

### SQL Migration Scripts

#### 2.1. Tạo Enum Types

```sql
-- Tạo enum cho các loại vai trò
CREATE TYPE public.app_role AS ENUM ('student', 'company', 'admin');

-- Tạo enum cho loại hình công việc
CREATE TYPE public.job_type AS ENUM ('full-time', 'part-time', 'internship', 'freelance', 'contract');

-- Tạo enum cho mức kinh nghiệm
CREATE TYPE public.experience_level AS ENUM ('fresher', 'junior', 'middle', 'senior', 'lead', 'manager');

-- Tạo enum cho trạng thái ứng tuyển
CREATE TYPE public.application_status AS ENUM ('pending', 'reviewing', 'interviewed', 'accepted', 'rejected');

-- Tạo enum cho danh mục tin tức
CREATE TYPE public.news_category AS ENUM ('recruitment', 'career-trend', 'event', 'tips', 'company-news');
```

#### 2.2. Bảng `user_roles` (Phân quyền)

```sql
-- CRITICAL: Roles phải được lưu trong bảng riêng để tránh privilege escalation
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'student',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, role)
);

-- Bật RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Function kiểm tra role (Security Definer để tránh recursive RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM public.user_roles
        WHERE user_id = _user_id
          AND role = _role
    )
$$;

-- RLS Policies
CREATE POLICY "Users can view their own roles"
    ON public.user_roles FOR SELECT
    USING (user_id = auth.uid());

CREATE POLICY "Admins can manage all roles"
    ON public.user_roles FOR ALL
    USING (public.has_role(auth.uid(), 'admin'));
```

#### 2.3. Bảng `companies` (Doanh nghiệp)

```sql
CREATE TABLE public.companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE,
    logo_url TEXT,
    cover_image_url TEXT,
    description TEXT,
    short_description VARCHAR(500),
    industry VARCHAR(100),
    company_size VARCHAR(50), -- '1-10', '11-50', '51-200', '201-500', '500+'
    address TEXT,
    city VARCHAR(100),
    website VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    tax_code VARCHAR(50),
    is_verified BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE,
    founded_year INTEGER,
    social_links JSONB DEFAULT '{}', -- { facebook, linkedin, youtube }
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_companies_user_id ON public.companies(user_id);
CREATE INDEX idx_companies_city ON public.companies(city);
CREATE INDEX idx_companies_industry ON public.companies(industry);
CREATE INDEX idx_companies_is_verified ON public.companies(is_verified);

-- Bật RLS
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Companies are viewable by everyone"
    ON public.companies FOR SELECT
    USING (true);

CREATE POLICY "Users can create their own company"
    ON public.companies FOR INSERT
    WITH CHECK (user_id = auth.uid());

CREATE POLICY "Company owners can update their company"
    ON public.companies FOR UPDATE
    USING (user_id = auth.uid());

CREATE POLICY "Admins can manage all companies"
    ON public.companies FOR ALL
    USING (public.has_role(auth.uid(), 'admin'));
```

#### 2.4. Bảng `jobs` (Việc làm)

```sql
CREATE TABLE public.jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE NOT NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255),
    description TEXT NOT NULL,
    requirements TEXT,
    benefits TEXT,
    location VARCHAR(255),
    city VARCHAR(100),
    is_remote BOOLEAN DEFAULT FALSE,
    salary_min INTEGER, -- VND
    salary_max INTEGER, -- VND
    salary_negotiable BOOLEAN DEFAULT FALSE,
    experience_level experience_level DEFAULT 'fresher',
    job_type job_type DEFAULT 'full-time',
    positions INTEGER DEFAULT 1, -- Số lượng cần tuyển
    skills TEXT[], -- Array of required skills
    is_hot BOOLEAN DEFAULT FALSE,
    is_urgent BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    views_count INTEGER DEFAULT 0,
    applications_count INTEGER DEFAULT 0,
    deadline DATE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_jobs_company_id ON public.jobs(company_id);
CREATE INDEX idx_jobs_city ON public.jobs(city);
CREATE INDEX idx_jobs_job_type ON public.jobs(job_type);
CREATE INDEX idx_jobs_experience_level ON public.jobs(experience_level);
CREATE INDEX idx_jobs_is_active ON public.jobs(is_active);
CREATE INDEX idx_jobs_is_hot ON public.jobs(is_hot);
CREATE INDEX idx_jobs_created_at ON public.jobs(created_at DESC);
CREATE INDEX idx_jobs_deadline ON public.jobs(deadline);

-- Full-text search index
CREATE INDEX idx_jobs_search ON public.jobs 
    USING GIN (to_tsvector('simple', title || ' ' || COALESCE(description, '')));

-- Bật RLS
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Active jobs are viewable by everyone"
    ON public.jobs FOR SELECT
    USING (is_active = true OR 
           company_id IN (SELECT id FROM companies WHERE user_id = auth.uid()) OR
           public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Company owners can create jobs"
    ON public.jobs FOR INSERT
    WITH CHECK (company_id IN (SELECT id FROM companies WHERE user_id = auth.uid()));

CREATE POLICY "Company owners can update their jobs"
    ON public.jobs FOR UPDATE
    USING (company_id IN (SELECT id FROM companies WHERE user_id = auth.uid()));

CREATE POLICY "Company owners can delete their jobs"
    ON public.jobs FOR DELETE
    USING (company_id IN (SELECT id FROM companies WHERE user_id = auth.uid()));

CREATE POLICY "Admins can manage all jobs"
    ON public.jobs FOR ALL
    USING (public.has_role(auth.uid(), 'admin'));
```

#### 2.5. Bảng `candidates` (Ứng viên/Hồ sơ)

```sql
CREATE TABLE public.candidates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    avatar_url TEXT,
    email VARCHAR(255),
    phone VARCHAR(20),
    date_of_birth DATE,
    gender VARCHAR(10), -- 'male', 'female', 'other'
    address TEXT,
    city VARCHAR(100),
    
    -- Thông tin học vấn
    university VARCHAR(255),
    major VARCHAR(255),
    graduation_year INTEGER,
    graduation_type VARCHAR(50), -- 'excellent', 'good', 'average'
    student_id VARCHAR(50), -- Mã sinh viên
    
    -- Thông tin nghề nghiệp
    current_position VARCHAR(255),
    experience_years INTEGER DEFAULT 0,
    desired_position VARCHAR(255),
    desired_salary_min INTEGER,
    desired_salary_max INTEGER,
    work_type job_type,
    preferred_cities TEXT[],
    
    -- Skills & Profile
    skills TEXT[],
    languages JSONB DEFAULT '[]', -- [{ name, level }]
    certifications JSONB DEFAULT '[]', -- [{ name, issuer, date }]
    bio TEXT,
    
    -- Trạng thái
    is_open_to_work BOOLEAN DEFAULT TRUE,
    is_top BOOLEAN DEFAULT FALSE, -- Ứng viên nổi bật
    profile_completion INTEGER DEFAULT 0, -- 0-100%
    
    -- Social links
    linkedin_url TEXT,
    github_url TEXT,
    portfolio_url TEXT,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_candidates_user_id ON public.candidates(user_id);
CREATE INDEX idx_candidates_city ON public.candidates(city);
CREATE INDEX idx_candidates_major ON public.candidates(major);
CREATE INDEX idx_candidates_experience ON public.candidates(experience_years);
CREATE INDEX idx_candidates_is_open ON public.candidates(is_open_to_work);
CREATE INDEX idx_candidates_skills ON public.candidates USING GIN (skills);

-- Bật RLS
ALTER TABLE public.candidates ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Public candidates are viewable by authenticated users"
    ON public.candidates FOR SELECT
    TO authenticated
    USING (is_open_to_work = true OR user_id = auth.uid());

CREATE POLICY "Users can create their own profile"
    ON public.candidates FOR INSERT
    WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own profile"
    ON public.candidates FOR UPDATE
    USING (user_id = auth.uid());

CREATE POLICY "Admins can view all candidates"
    ON public.candidates FOR SELECT
    USING (public.has_role(auth.uid(), 'admin'));
```

#### 2.6. Bảng `cvs` (CV)

```sql
CREATE TABLE public.cvs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID REFERENCES public.candidates(id) ON DELETE CASCADE NOT NULL,
    template_id VARCHAR(50) NOT NULL, -- ID của template CV
    name VARCHAR(255) DEFAULT 'My CV',
    
    -- CV Data (JSONB để linh hoạt)
    data JSONB NOT NULL DEFAULT '{
        "personalInfo": {},
        "education": [],
        "experience": [],
        "skills": [],
        "languages": [],
        "certifications": [],
        "projects": [],
        "references": []
    }',
    
    pdf_url TEXT, -- URL của file PDF đã generate
    is_primary BOOLEAN DEFAULT FALSE, -- CV chính để ứng tuyển
    is_public BOOLEAN DEFAULT FALSE, -- Có public không
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_cvs_candidate_id ON public.cvs(candidate_id);
CREATE INDEX idx_cvs_is_primary ON public.cvs(is_primary);

-- Bật RLS
ALTER TABLE public.cvs ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own CVs"
    ON public.cvs FOR SELECT
    USING (candidate_id IN (SELECT id FROM candidates WHERE user_id = auth.uid()));

CREATE POLICY "Public CVs are viewable"
    ON public.cvs FOR SELECT
    USING (is_public = true);

CREATE POLICY "Users can manage their own CVs"
    ON public.cvs FOR ALL
    USING (candidate_id IN (SELECT id FROM candidates WHERE user_id = auth.uid()));
```

#### 2.7. Bảng `job_applications` (Ứng tuyển)

```sql
CREATE TABLE public.job_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID REFERENCES public.jobs(id) ON DELETE CASCADE NOT NULL,
    candidate_id UUID REFERENCES public.candidates(id) ON DELETE CASCADE NOT NULL,
    cv_id UUID REFERENCES public.cvs(id) ON DELETE SET NULL,
    
    cover_letter TEXT,
    status application_status DEFAULT 'pending',
    
    -- Tracking
    viewed_at TIMESTAMPTZ,
    reviewed_at TIMESTAMPTZ,
    interview_date TIMESTAMPTZ,
    
    -- Notes from company
    company_notes TEXT,
    rejection_reason TEXT,
    
    applied_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE(job_id, candidate_id) -- Mỗi ứng viên chỉ ứng tuyển 1 lần/job
);

-- Indexes
CREATE INDEX idx_applications_job_id ON public.job_applications(job_id);
CREATE INDEX idx_applications_candidate_id ON public.job_applications(candidate_id);
CREATE INDEX idx_applications_status ON public.job_applications(status);
CREATE INDEX idx_applications_applied_at ON public.job_applications(applied_at DESC);

-- Bật RLS
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Candidates can view their applications"
    ON public.job_applications FOR SELECT
    USING (candidate_id IN (SELECT id FROM candidates WHERE user_id = auth.uid()));

CREATE POLICY "Companies can view applications for their jobs"
    ON public.job_applications FOR SELECT
    USING (job_id IN (
        SELECT j.id FROM jobs j
        JOIN companies c ON j.company_id = c.id
        WHERE c.user_id = auth.uid()
    ));

CREATE POLICY "Candidates can apply for jobs"
    ON public.job_applications FOR INSERT
    WITH CHECK (candidate_id IN (SELECT id FROM candidates WHERE user_id = auth.uid()));

CREATE POLICY "Companies can update application status"
    ON public.job_applications FOR UPDATE
    USING (job_id IN (
        SELECT j.id FROM jobs j
        JOIN companies c ON j.company_id = c.id
        WHERE c.user_id = auth.uid()
    ));
```

#### 2.8. Bảng `news` (Tin tức)

```sql
CREATE TABLE public.news (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE,
    description VARCHAR(1000),
    content TEXT NOT NULL,
    
    category news_category NOT NULL,
    tags TEXT[],
    
    image_url TEXT,
    thumbnail_url TEXT,
    
    views_count INTEGER DEFAULT 0,
    read_time INTEGER DEFAULT 5, -- minutes
    
    is_hot BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE,
    is_published BOOLEAN DEFAULT FALSE,
    
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_news_category ON public.news(category);
CREATE INDEX idx_news_published_at ON public.news(published_at DESC);
CREATE INDEX idx_news_is_published ON public.news(is_published);
CREATE INDEX idx_news_tags ON public.news USING GIN (tags);

-- Full-text search
CREATE INDEX idx_news_search ON public.news 
    USING GIN (to_tsvector('simple', title || ' ' || COALESCE(description, '') || ' ' || COALESCE(content, '')));

-- Bật RLS
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Published news are viewable by everyone"
    ON public.news FOR SELECT
    USING (is_published = true);

CREATE POLICY "Admins can manage all news"
    ON public.news FOR ALL
    USING (public.has_role(auth.uid(), 'admin'));
```

#### 2.9. Bảng `events` (Sự kiện)

```sql
CREATE TABLE public.events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE,
    description TEXT,
    content TEXT,
    
    image_url TEXT,
    
    event_date DATE NOT NULL,
    start_time TIME,
    end_time TIME,
    
    location VARCHAR(500),
    location_type VARCHAR(50), -- 'online', 'offline', 'hybrid'
    online_link TEXT,
    
    max_attendees INTEGER,
    registration_deadline DATE,
    
    organizer VARCHAR(255),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(20),
    
    is_featured BOOLEAN DEFAULT FALSE,
    is_published BOOLEAN DEFAULT FALSE,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_events_event_date ON public.events(event_date);
CREATE INDEX idx_events_is_published ON public.events(is_published);

-- Bật RLS
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Published events are viewable by everyone"
    ON public.events FOR SELECT
    USING (is_published = true);

CREATE POLICY "Admins can manage all events"
    ON public.events FOR ALL
    USING (public.has_role(auth.uid(), 'admin'));
```

#### 2.10. Bảng `contact_submissions` (Liên hệ)

```sql
CREATE TABLE public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(500),
    message TEXT NOT NULL,
    
    -- Meta
    user_agent TEXT,
    ip_address INET,
    
    -- Status
    is_read BOOLEAN DEFAULT FALSE,
    is_resolved BOOLEAN DEFAULT FALSE,
    resolved_by UUID REFERENCES auth.users(id),
    resolved_at TIMESTAMPTZ,
    admin_notes TEXT,
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_contact_is_read ON public.contact_submissions(is_read);
CREATE INDEX idx_contact_created_at ON public.contact_submissions(created_at DESC);

-- Bật RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies (Chỉ admin mới xem được)
CREATE POLICY "Anyone can submit contact form"
    ON public.contact_submissions FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Admins can view all submissions"
    ON public.contact_submissions FOR SELECT
    USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update submissions"
    ON public.contact_submissions FOR UPDATE
    USING (public.has_role(auth.uid(), 'admin'));
```

#### 2.11. Triggers và Functions

```sql
-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to tables
CREATE TRIGGER update_companies_updated_at
    BEFORE UPDATE ON public.companies
    FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

CREATE TRIGGER update_jobs_updated_at
    BEFORE UPDATE ON public.jobs
    FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

CREATE TRIGGER update_candidates_updated_at
    BEFORE UPDATE ON public.candidates
    FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

CREATE TRIGGER update_cvs_updated_at
    BEFORE UPDATE ON public.cvs
    FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

CREATE TRIGGER update_applications_updated_at
    BEFORE UPDATE ON public.job_applications
    FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

CREATE TRIGGER update_news_updated_at
    BEFORE UPDATE ON public.news
    FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- Auto-create candidate profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.candidates (user_id, full_name, email)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
        NEW.email
    );
    
    -- Assign default role
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'student');
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Increment views count
CREATE OR REPLACE FUNCTION public.increment_job_views(job_id UUID)
RETURNS VOID AS $$
BEGIN
    UPDATE public.jobs 
    SET views_count = views_count + 1 
    WHERE id = job_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.increment_news_views(news_id UUID)
RETURNS VOID AS $$
BEGIN
    UPDATE public.news 
    SET views_count = views_count + 1 
    WHERE id = news_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Update applications count when new application is created
CREATE OR REPLACE FUNCTION public.update_job_applications_count()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE public.jobs 
        SET applications_count = applications_count + 1 
        WHERE id = NEW.job_id;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE public.jobs 
        SET applications_count = applications_count - 1 
        WHERE id = OLD.job_id;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER update_applications_count
    AFTER INSERT OR DELETE ON public.job_applications
    FOR EACH ROW EXECUTE FUNCTION update_job_applications_count();
```

---

## 3. API Endpoints

### 3.1. REST API (Supabase Auto-generated)

Supabase tự động tạo REST API từ database schema. Base URL:

```
https://<project-ref>.supabase.co/rest/v1/
```

#### Jobs API

| Method | Endpoint | Mô tả | Auth |
|--------|----------|-------|------|
| GET | `/jobs` | Danh sách việc làm | Public |
| GET | `/jobs?id=eq.{id}` | Chi tiết việc làm | Public |
| GET | `/jobs?select=*,companies(*)` | Jobs với company info | Public |
| POST | `/jobs` | Tạo việc làm mới | Company |
| PATCH | `/jobs?id=eq.{id}` | Cập nhật việc làm | Company |
| DELETE | `/jobs?id=eq.{id}` | Xóa việc làm | Company |

**Query Examples:**

```typescript
// Lấy jobs có filter
const { data } = await supabase
  .from('jobs')
  .select('*, companies(*)')
  .eq('is_active', true)
  .eq('city', 'Hà Nội')
  .gte('salary_min', 10000000)
  .order('created_at', { ascending: false })
  .range(0, 9); // Pagination: first 10 items

// Full-text search
const { data } = await supabase
  .from('jobs')
  .select('*')
  .textSearch('title', 'kỹ sư phần mềm', { type: 'websearch' });
```

#### Companies API

| Method | Endpoint | Mô tả | Auth |
|--------|----------|-------|------|
| GET | `/companies` | Danh sách công ty | Public |
| GET | `/companies?id=eq.{id}` | Chi tiết công ty | Public |
| POST | `/companies` | Tạo công ty | Authenticated |
| PATCH | `/companies?id=eq.{id}` | Cập nhật công ty | Owner |

#### Candidates API

| Method | Endpoint | Mô tả | Auth |
|--------|----------|-------|------|
| GET | `/candidates` | Danh sách ứng viên | Authenticated |
| GET | `/candidates?id=eq.{id}` | Chi tiết ứng viên | Authenticated |
| POST | `/candidates` | Tạo hồ sơ | Authenticated |
| PATCH | `/candidates?id=eq.{id}` | Cập nhật hồ sơ | Owner |

#### News API

| Method | Endpoint | Mô tả | Auth |
|--------|----------|-------|------|
| GET | `/news?is_published=eq.true` | Tin đã publish | Public |
| GET | `/news?id=eq.{id}` | Chi tiết tin | Public |
| POST | `/news` | Tạo tin mới | Admin |
| PATCH | `/news?id=eq.{id}` | Cập nhật tin | Admin |

#### Events API

| Method | Endpoint | Mô tả | Auth |
|--------|----------|-------|------|
| GET | `/events?is_published=eq.true` | Sự kiện đã publish | Public |
| GET | `/events?event_date=gte.{today}` | Sự kiện sắp tới | Public |

#### Job Applications API

| Method | Endpoint | Mô tả | Auth |
|--------|----------|-------|------|
| GET | `/job_applications?candidate_id=eq.{id}` | Đơn ứng tuyển của tôi | Candidate |
| GET | `/job_applications?job_id=eq.{id}` | Đơn ứng tuyển cho job | Company |
| POST | `/job_applications` | Nộp đơn ứng tuyển | Candidate |
| PATCH | `/job_applications?id=eq.{id}` | Cập nhật trạng thái | Company |

### 3.2. RPC Functions

```typescript
// Increment views
await supabase.rpc('increment_job_views', { job_id: 'uuid-here' });
await supabase.rpc('increment_news_views', { news_id: 'uuid-here' });
```

---

## 4. Xác thực và Phân quyền

### 4.1. Authentication Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Login/Signup   │────►│  Supabase Auth  │────►│  JWT Token      │
│  (Email/OAuth)  │     │                 │     │  (Access Token) │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                                                         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Frontend       │◄────│  Auth Context   │◄────│  User Session   │
│  (Protected)    │     │  (React)        │     │  + Roles        │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### 4.2. User Roles

| Role | Mô tả | Quyền hạn |
|------|-------|-----------|
| `student` | Sinh viên/Ứng viên | Xem jobs, tạo CV, ứng tuyển |
| `company` | Doanh nghiệp | Quản lý company, đăng jobs, xem ứng viên |
| `admin` | Quản trị viên | Full access |

### 4.3. Auth Implementation

```typescript
// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  session: Session | null;
  roles: string[];
  isLoading: boolean;
}

export const useAuth = () => {
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    roles: [],
    isLoading: true,
  });

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setState(prev => ({ ...prev, session, user: session?.user ?? null }));
        
        if (session?.user) {
          // Fetch user roles
          const { data: roles } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', session.user.id);
          
          setState(prev => ({
            ...prev,
            roles: roles?.map(r => r.role) ?? [],
            isLoading: false,
          }));
        } else {
          setState(prev => ({ ...prev, roles: [], isLoading: false }));
        }
      }
    );

    // Then get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        setState(prev => ({ ...prev, isLoading: false }));
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    return supabase.auth.signInWithPassword({ email, password });
  };

  const signUp = async (email: string, password: string, metadata?: object) => {
    return supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: metadata,
      },
    });
  };

  const signOut = async () => {
    return supabase.auth.signOut();
  };

  const hasRole = (role: string) => state.roles.includes(role);

  return {
    ...state,
    signIn,
    signUp,
    signOut,
    hasRole,
    isAdmin: hasRole('admin'),
    isCompany: hasRole('company'),
    isStudent: hasRole('student'),
  };
};
```

### 4.4. Protected Routes

```typescript
// src/components/ProtectedRoute.tsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface Props {
  children: React.ReactNode;
  requiredRole?: string;
}

export const ProtectedRoute = ({ children, requiredRole }: Props) => {
  const { user, isLoading, hasRole } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/dang-nhap" state={{ from: location }} replace />;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return <Navigate to="/403" replace />;
  }

  return <>{children}</>;
};
```

---

## 5. Hướng dẫn kết nối Supabase

### 5.1. Cài đặt

```bash
npm install @supabase/supabase-js
```

### 5.2. Tạo Supabase Client

```typescript
// src/integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});
```

### 5.3. Environment Variables

Tạo file `.env.local`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 5.4. Generate TypeScript Types

```bash
npx supabase gen types typescript --project-id your-project-id > src/integrations/supabase/types.ts
```

---

## 6. Edge Functions

### 6.1. Cấu trúc thư mục

```
supabase/
├── config.toml
└── functions/
    ├── _shared/
    │   ├── cors.ts
    │   └── supabase-client.ts
    ├── apply-job/
    │   └── index.ts
    ├── generate-cv-pdf/
    │   └── index.ts
    ├── send-contact-email/
    │   └── index.ts
    └── ai-cv-suggestion/
        └── index.ts
```

### 6.2. Shared Utilities

```typescript
// supabase/functions/_shared/cors.ts
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// supabase/functions/_shared/supabase-client.ts
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const createSupabaseClient = (authHeader: string | null) => {
  return createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    {
      global: { headers: authHeader ? { Authorization: authHeader } : {} },
    }
  );
};
```

### 6.3. Apply Job Function

```typescript
// supabase/functions/apply-job/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { createSupabaseClient } from "../_shared/supabase-client.ts";

interface ApplyJobRequest {
  jobId: string;
  cvId?: string;
  coverLetter?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createSupabaseClient(authHeader);
    
    // Verify user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { jobId, cvId, coverLetter }: ApplyJobRequest = await req.json();

    // Get candidate profile
    const { data: candidate, error: candidateError } = await supabase
      .from('candidates')
      .select('id')
      .eq('user_id', user.id)
      .single();

    if (candidateError || !candidate) {
      return new Response(
        JSON.stringify({ error: 'Candidate profile not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if already applied
    const { data: existing } = await supabase
      .from('job_applications')
      .select('id')
      .eq('job_id', jobId)
      .eq('candidate_id', candidate.id)
      .single();

    if (existing) {
      return new Response(
        JSON.stringify({ error: 'Already applied for this job' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create application
    const { data: application, error: insertError } = await supabase
      .from('job_applications')
      .insert({
        job_id: jobId,
        candidate_id: candidate.id,
        cv_id: cvId,
        cover_letter: coverLetter,
      })
      .select()
      .single();

    if (insertError) {
      throw insertError;
    }

    // TODO: Send notification email to company

    return new Response(
      JSON.stringify({ success: true, application }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
```

### 6.4. Send Contact Email Function

```typescript
// supabase/functions/send-contact-email/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { createSupabaseClient } from "../_shared/supabase-client.ts";

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createSupabaseClient(null);
    const body: ContactRequest = await req.json();

    // Validate input
    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Save to database
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: body.name,
        email: body.email,
        phone: body.phone,
        subject: body.subject,
        message: body.message,
        ip_address: req.headers.get('x-forwarded-for'),
        user_agent: req.headers.get('user-agent'),
      });

    if (dbError) {
      throw dbError;
    }

    // Send email using Resend (if configured)
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (resendApiKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'UTT Talent Network <no-reply@yourdomain.com>',
          to: ['admin@utt.edu.vn'],
          subject: `[Contact Form] ${body.subject || 'New message from ' + body.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${body.message}</p>
          `,
        }),
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit contact form' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
```

### 6.5. Config TOML

```toml
# supabase/config.toml
[functions.apply-job]
verify_jwt = false

[functions.send-contact-email]
verify_jwt = false

[functions.generate-cv-pdf]
verify_jwt = false

[functions.ai-cv-suggestion]
verify_jwt = false
```

### 6.6. Gọi Edge Functions từ Frontend

```typescript
// src/lib/api.ts
import { supabase } from '@/integrations/supabase/client';

export const applyForJob = async (jobId: string, cvId?: string, coverLetter?: string) => {
  const { data, error } = await supabase.functions.invoke('apply-job', {
    body: { jobId, cvId, coverLetter },
  });

  if (error) throw error;
  return data;
};

export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) => {
  const { data, error } = await supabase.functions.invoke('send-contact-email', {
    body: formData,
  });

  if (error) throw error;
  return data;
};
```

---

## 7. Storage

### 7.1. Tạo Storage Buckets

```sql
-- Avatars bucket (public)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'avatars',
  'avatars',
  true,
  5242880, -- 5MB
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
);

-- Company logos bucket (public)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'company-logos',
  'company-logos',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml']
);

-- CV PDFs bucket (private)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'cv-pdfs',
  'cv-pdfs',
  false,
  10485760, -- 10MB
  ARRAY['application/pdf']
);

-- News images bucket (public)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'news-images',
  'news-images',
  true,
  10485760,
  ARRAY['image/jpeg', 'image/png', 'image/webp']
);
```

### 7.2. Storage RLS Policies

```sql
-- Avatars policies
CREATE POLICY "Anyone can view avatars"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'avatars');

CREATE POLICY "Authenticated users can upload avatars"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'avatars' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "Users can update their own avatars"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'avatars' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

-- CV PDFs policies
CREATE POLICY "Users can view their own CVs"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'cv-pdfs' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "Users can upload their own CVs"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'cv-pdfs' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );
```

### 7.3. Upload từ Frontend

```typescript
// src/lib/storage.ts
import { supabase } from '@/integrations/supabase/client';

export const uploadAvatar = async (userId: string, file: File) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}/${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from('avatars')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: true,
    });

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from('avatars')
    .getPublicUrl(data.path);

  return publicUrl;
};

export const uploadCompanyLogo = async (companyId: string, file: File) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${companyId}/${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from('company-logos')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: true,
    });

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from('company-logos')
    .getPublicUrl(data.path);

  return publicUrl;
};
```

---

## 8. React Hooks

### 8.1. useJobs Hook

```typescript
// src/hooks/useJobs.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface JobFilters {
  city?: string;
  jobType?: string;
  experienceLevel?: string;
  salaryMin?: number;
  search?: string;
  companyId?: string;
  isHot?: boolean;
}

export const useJobs = (filters: JobFilters = {}, page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['jobs', filters, page],
    queryFn: async () => {
      let query = supabase
        .from('jobs')
        .select('*, companies(*)', { count: 'exact' })
        .eq('is_active', true);

      // Apply filters
      if (filters.city) {
        query = query.eq('city', filters.city);
      }
      if (filters.jobType) {
        query = query.eq('job_type', filters.jobType);
      }
      if (filters.experienceLevel) {
        query = query.eq('experience_level', filters.experienceLevel);
      }
      if (filters.salaryMin) {
        query = query.gte('salary_min', filters.salaryMin);
      }
      if (filters.companyId) {
        query = query.eq('company_id', filters.companyId);
      }
      if (filters.isHot) {
        query = query.eq('is_hot', true);
      }
      if (filters.search) {
        query = query.textSearch('title', filters.search, { type: 'websearch' });
      }

      // Pagination
      const from = (page - 1) * limit;
      const to = from + limit - 1;
      query = query.range(from, to).order('created_at', { ascending: false });

      const { data, error, count } = await query;
      if (error) throw error;

      return {
        jobs: data,
        total: count ?? 0,
        page,
        totalPages: Math.ceil((count ?? 0) / limit),
      };
    },
  });
};

export const useJob = (id: string) => {
  return useQuery({
    queryKey: ['job', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*, companies(*)')
        .eq('id', id)
        .single();

      if (error) throw error;

      // Increment views
      await supabase.rpc('increment_job_views', { job_id: id });

      return data;
    },
    enabled: !!id,
  });
};

export const useCreateJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (job: Partial<Database['public']['Tables']['jobs']['Insert']>) => {
      const { data, error } = await supabase
        .from('jobs')
        .insert(job)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
};
```

### 8.2. useCandidates Hook

```typescript
// src/hooks/useCandidates.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface CandidateFilters {
  city?: string;
  major?: string;
  experienceMin?: number;
  skills?: string[];
  isOpenToWork?: boolean;
}

export const useCandidates = (filters: CandidateFilters = {}, page = 1, limit = 12) => {
  return useQuery({
    queryKey: ['candidates', filters, page],
    queryFn: async () => {
      let query = supabase
        .from('candidates')
        .select('*', { count: 'exact' })
        .eq('is_open_to_work', true);

      if (filters.city) {
        query = query.eq('city', filters.city);
      }
      if (filters.major) {
        query = query.eq('major', filters.major);
      }
      if (filters.experienceMin) {
        query = query.gte('experience_years', filters.experienceMin);
      }
      if (filters.skills && filters.skills.length > 0) {
        query = query.overlaps('skills', filters.skills);
      }

      const from = (page - 1) * limit;
      const to = from + limit - 1;
      query = query.range(from, to).order('updated_at', { ascending: false });

      const { data, error, count } = await query;
      if (error) throw error;

      return {
        candidates: data,
        total: count ?? 0,
        page,
        totalPages: Math.ceil((count ?? 0) / limit),
      };
    },
  });
};

export const useMyProfile = () => {
  return useQuery({
    queryKey: ['my-profile'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;

      const { data, error } = await supabase
        .from('candidates')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      return data;
    },
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updates: Partial<Database['public']['Tables']['candidates']['Update']>) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      const { data, error } = await supabase
        .from('candidates')
        .update(updates)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-profile'] });
    },
  });
};
```

### 8.3. useNews Hook

```typescript
// src/hooks/useNews.ts
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface NewsFilters {
  category?: string;
  search?: string;
  isHot?: boolean;
}

export const useNews = (filters: NewsFilters = {}, page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['news', filters, page],
    queryFn: async () => {
      let query = supabase
        .from('news')
        .select('*', { count: 'exact' })
        .eq('is_published', true);

      if (filters.category) {
        query = query.eq('category', filters.category);
      }
      if (filters.isHot) {
        query = query.eq('is_hot', true);
      }
      if (filters.search) {
        query = query.textSearch('title', filters.search, { type: 'websearch' });
      }

      const from = (page - 1) * limit;
      const to = from + limit - 1;
      query = query.range(from, to).order('published_at', { ascending: false });

      const { data, error, count } = await query;
      if (error) throw error;

      return {
        news: data,
        total: count ?? 0,
        page,
        totalPages: Math.ceil((count ?? 0) / limit),
      };
    },
  });
};

export const useNewsArticle = (id: string) => {
  return useQuery({
    queryKey: ['news', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('id', id)
        .eq('is_published', true)
        .single();

      if (error) throw error;

      // Increment views
      await supabase.rpc('increment_news_views', { news_id: id });

      return data;
    },
    enabled: !!id,
  });
};
```

---

## 9. Checklist triển khai

### Phase 1: Setup cơ bản
- [ ] Tạo Supabase project
- [ ] Chạy migration scripts tạo tables
- [ ] Cài đặt `@supabase/supabase-js`
- [ ] Tạo Supabase client
- [ ] Cấu hình environment variables

### Phase 2: Authentication
- [ ] Setup Supabase Auth (Email/Password)
- [ ] Tạo trang Login/Register
- [ ] Implement AuthContext và useAuth hook
- [ ] Setup Protected Routes
- [ ] Test đăng ký/đăng nhập

### Phase 3: Core Features
- [ ] Migrate Jobs data từ hardcode sang database
- [ ] Implement useJobs hook
- [ ] Cập nhật trang Việc làm
- [ ] Migrate Candidates data
- [ ] Implement useCandidates hook
- [ ] Cập nhật trang Ứng viên

### Phase 4: Advanced Features
- [ ] Tạo Edge Function `apply-job`
- [ ] Implement job application flow
- [ ] Tạo Edge Function `send-contact-email`
- [ ] Implement contact form
- [ ] Setup Storage buckets
- [ ] Implement file uploads

### Phase 5: Admin
- [ ] Tạo Admin dashboard
- [ ] CRUD cho Jobs
- [ ] CRUD cho News
- [ ] Quản lý applications

### Phase 6: Optimization
- [ ] Add caching với React Query
- [ ] Implement pagination
- [ ] Add search functionality
- [ ] Performance testing

---

## Tài liệu tham khảo

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)
- [React Query (TanStack Query)](https://tanstack.com/query/latest)
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

---

*Tài liệu này được tạo cho dự án Mạng lưới Tài năng UTT. Cập nhật lần cuối: Tháng 1/2024*
