import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
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
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          content: string;
          excerpt: string;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
          tags?: string[];
          featured_image?: string | null;
          is_published?: boolean;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          content?: string;
          excerpt?: string;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
          tags?: string[];
          featured_image?: string | null;
          is_published?: boolean;
        };
      };
    };
  };
};