export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          is_private: boolean
          follower_count: number
          following_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          is_private?: boolean
          follower_count?: number
          following_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          is_private?: boolean
          follower_count?: number
          following_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      videos: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          url: string | null
          thumbnail_url: string | null
          duration: number | null
          views: number
          likes: number
          status: 'draft' | 'processing' | 'published' | 'failed'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          url?: string | null
          thumbnail_url?: string | null
          duration?: number | null
          views?: number
          likes?: number
          status?: 'draft' | 'processing' | 'published' | 'failed'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          url?: string | null
          thumbnail_url?: string | null
          duration?: number | null
          views?: number
          likes?: number
          status?: 'draft' | 'processing' | 'published' | 'failed'
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      video_status: 'draft' | 'processing' | 'published' | 'failed'
    }
  }
}