export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  tags: string[];
  featured_image: string | null;
  is_published: boolean;
}

export interface BlogSearchParams {
  search?: string;
  tag?: string;
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}