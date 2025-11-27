create table public.admissions (
  id uuid not null default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  date_of_birth date,
  nationality text,
  last_diploma text,
  school text,
  year_obtained text,
  average_grade text,
  program_id text not null,
  intake text not null,
  study_mode text not null,
  status text not null default 'PENDING',

  constraint admissions_pkey primary key (id)
);

alter table public.admissions enable row level security;

create policy "Admissions are viewable by everyone (for now)"
  on admissions for select
  using ( true );

create policy "Anyone can insert admissions"
  on admissions for insert
  with check ( true );
