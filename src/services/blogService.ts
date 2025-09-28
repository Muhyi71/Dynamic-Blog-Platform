import { MockBlogService } from './mockBlogService';
import type { BlogPost, BlogSearchParams, PaginatedResponse } from '../types/blog';

// Using MockBlogService for demo purposes
// To use Supabase, uncomment the import below and replace MockBlogService with the Supabase implementation
// import { supabase } from '../lib/supabase';

export class BlogService {
  static async getPosts(params: BlogSearchParams = {}): Promise<PaginatedResponse<BlogPost>> {
    return MockBlogService.getPosts(params);
  }

  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return MockBlogService.getPostBySlug(slug);
  }

  static async getAllTags(): Promise<string[]> {
    return MockBlogService.getAllTags();
  }

  // Admin methods
  static async createPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>): Promise<BlogPost> {
    return MockBlogService.createPost(post);
  }

  static async updatePost(id: string, updates: Partial<BlogPost>): Promise<BlogPost> {
    return MockBlogService.updatePost(id, updates);
  }

  static async deletePost(id: string): Promise<void> {
    return MockBlogService.deletePost(id);
  }

  static async getAllPosts(): Promise<BlogPost[]> {
    return MockBlogService.getAllPosts();
  }
}