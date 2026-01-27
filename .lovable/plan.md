
# Kế hoạch: Tạo File Markdown Hướng Dẫn Backend và API

## Tổng quan

Tạo một file hướng dẫn toàn diện (`docs/BACKEND_GUIDE.md`) để giúp team phát triển hiểu và triển khai backend cho website Mạng lưới Tài năng UTT, bao gồm:

- Thiết kế database schema
- Danh sách các API endpoints
- Hướng dẫn kết nối Supabase
- Cấu trúc Edge Functions
- Xác thực và phân quyền

---

## Phân tích hiện trạng

Dựa trên codebase hiện tại, website có các tính năng cần backend:

| Trang/Tính năng | Dữ liệu cần | Trạng thái |
|-----------------|-------------|------------|
| Việc làm (`/viec-lam`) | Jobs, Companies, Categories | Hardcode |
| Ứng viên (`/ung-vien`) | Candidates, Skills, CVs | Hardcode |
| Tin tức (`/tin-tuc`) | News, Events, Categories | Hardcode |
| Tạo CV (`/tao-cv`) | CV Templates, User CVs | Hardcode |
| Thống kê (StatsSection) | Analytics | Hardcode |
| Liên hệ | Contact Form | Chưa có |

---

## Nội dung File Hướng Dẫn

### 1. Kiến trúc hệ thống

Mô tả kiến trúc tổng thể:

```text
+-------------------+      +------------------+      +---------------+
|   React Frontend  | <--> | Supabase Client  | <--> |   Supabase    |
|   (Vite + TS)     |      |   @supabase/js   |      | - PostgreSQL  |
+-------------------+      +------------------+      | - Auth        |
                                  |                  | - Storage     |
                                  v                  | - Edge Func   |
                          +------------------+       +---------------+
                          |  Edge Functions  |
                          | (Deno Runtime)   |
                          +------------------+
```

### 2. Database Schema

Thiết kế các bảng dữ liệu:

**Bảng `companies`**
- id, name, logo_url, description, address, website, is_verified, created_at

**Bảng `jobs`**
- id, company_id, title, description, location, salary_min, salary_max, experience_level, job_type, is_hot, is_urgent, benefits, requirements, deadline, created_at

**Bảng `candidates` (profiles)**
- id, user_id, full_name, avatar_url, major, graduation_type, location, desired_position, desired_salary, work_type, experience, skills, is_top, created_at

**Bảng `cvs`**
- id, candidate_id, template_id, data (JSONB), pdf_url, created_at

**Bảng `news`**
- id, title, description, content, category, image_url, views, read_time, is_hot, published_at

**Bảng `events`**
- id, title, date, location, description, is_upcoming

**Bảng `contact_submissions`**
- id, name, email, phone, message, created_at

**Bảng `job_applications`**
- id, job_id, candidate_id, cv_id, status, cover_letter, applied_at

### 3. API Endpoints

**Jobs API**
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/rest/v1/jobs` | Danh sách việc làm (có filter, pagination) |
| GET | `/rest/v1/jobs?id=eq.{id}` | Chi tiết việc làm |
| POST | `/rest/v1/jobs` | Tạo việc làm mới (Admin/Company) |
| PATCH | `/rest/v1/jobs?id=eq.{id}` | Cập nhật việc làm |
| DELETE | `/rest/v1/jobs?id=eq.{id}` | Xóa việc làm |

**Candidates API**
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/rest/v1/candidates` | Danh sách ứng viên |
| GET | `/rest/v1/candidates?id=eq.{id}` | Chi tiết ứng viên |
| POST | `/rest/v1/candidates` | Tạo hồ sơ ứng viên |
| PATCH | `/rest/v1/candidates?id=eq.{id}` | Cập nhật hồ sơ |

**News API**
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/rest/v1/news` | Danh sách tin tức |
| GET | `/rest/v1/news?id=eq.{id}` | Chi tiết tin tức |
| POST | `/functions/v1/increment-views` | Tăng lượt xem |

**Edge Functions (cho logic phức tạp)**
| Function | Mô tả |
|----------|-------|
| `apply-job` | Xử lý ứng tuyển việc làm |
| `generate-cv-pdf` | Tạo PDF từ CV |
| `send-contact-email` | Gửi email liên hệ |
| `ai-cv-suggestion` | Gợi ý nội dung CV bằng AI |
| `search-jobs` | Tìm kiếm việc làm nâng cao |

### 4. Xác thực và Phân quyền

**User Roles**
- `student`: Sinh viên/Ứng viên
- `company`: Doanh nghiệp
- `admin`: Quản trị viên

**RLS Policies (Row Level Security)**

```sql
-- Ví dụ: Chỉ company owner mới có thể sửa job của mình
CREATE POLICY "Companies can update own jobs"
ON jobs FOR UPDATE
USING (company_id IN (
  SELECT id FROM companies WHERE user_id = auth.uid()
));
```

### 5. Hướng dẫn kết nối Supabase

**Bước 1: Cài đặt Supabase Client**
```bash
npm install @supabase/supabase-js
```

**Bước 2: Tạo Supabase Client**
```typescript
// src/integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

**Bước 3: Sử dụng với React Query**
```typescript
// src/hooks/useJobs.ts
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

export const useJobs = (filters) => {
  return useQuery({
    queryKey: ['jobs', filters],
    queryFn: async () => {
      let query = supabase.from('jobs').select('*, companies(*)')
      // Apply filters...
      const { data, error } = await query
      if (error) throw error
      return data
    }
  })
}
```

### 6. Cấu trúc Edge Functions

```text
supabase/
└── functions/
    ├── apply-job/
    │   └── index.ts
    ├── generate-cv-pdf/
    │   └── index.ts
    ├── send-contact-email/
    │   └── index.ts
    └── ai-cv-suggestion/
        └── index.ts
```

**Ví dụ Edge Function**
```typescript
// supabase/functions/apply-job/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const { jobId, cvId, coverLetter } = await req.json()
  
  // Xử lý logic ứng tuyển...
  
  return new Response(
    JSON.stringify({ success: true }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  )
})
```

---

## Các file sẽ tạo

| File | Mô tả |
|------|-------|
| `docs/BACKEND_GUIDE.md` | Hướng dẫn đầy đủ về backend |

---

## Chi tiết kỹ thuật

### Database Relationships

```text
users (auth.users)
  └── candidates (1:1)
  └── companies (1:N - owner)

companies
  └── jobs (1:N)

jobs
  └── job_applications (1:N)

candidates
  └── cvs (1:N)
  └── job_applications (1:N)

news
events
contact_submissions (standalone)
```

### Indexes cần tạo

- `jobs`: location, job_type, experience_level, company_id, created_at
- `candidates`: major, location, experience
- `news`: category, published_at

### Storage Buckets

- `avatars`: Ảnh đại diện người dùng
- `company-logos`: Logo công ty  
- `cv-pdfs`: File CV PDF
- `news-images`: Ảnh tin tức

---

## Kết quả mong đợi

File `docs/BACKEND_GUIDE.md` sẽ chứa đầy đủ:

1. Kiến trúc hệ thống tổng quan
2. Database schema với SQL tạo bảng
3. Danh sách API endpoints chi tiết
4. Hướng dẫn cài đặt Supabase từ A-Z
5. Mẫu code Edge Functions
6. Hướng dẫn RLS và bảo mật
7. Ví dụ code React hooks để kết nối API
8. Checklist triển khai

Tài liệu này sẽ giúp team backend hiểu rõ yêu cầu và triển khai nhanh chóng hệ thống backend cho website.
