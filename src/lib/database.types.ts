import type { ProductInfoType } from '@/types/product.type';

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      coupons: {
        Row: {
          created_at: string;
          description: string;
          discount: number;
          discount_type: 'amount' | 'rate';
          expiry_date: string;
          id: string;
          is_used: boolean;
          max_discount: number;
          name: string;
          usage_amount: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          description: string;
          discount: number;
          discount_type: 'amount' | 'rate';
          expiry_date?: string;
          id?: string;
          is_used?: boolean;
          max_discount: number;
          name: string;
          usage_amount: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          description?: string;
          discount?: number;
          discount_type?: 'amount' | 'rate';
          expiry_date?: string;
          id?: string;
          is_used?: boolean;
          max_discount?: number;
          name?: string;
          usage_amount?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_coupons_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      products: {
        Row: {
          created_at: string;
          id: string;
          images: string[];
          info: ProductInfoType;
        };
        Insert: {
          created_at?: string;
          id?: string;
          images: string[];
          info: ProductInfoType;
        };
        Update: {
          created_at?: string;
          id?: string;
          images?: string[];
          info?: ProductInfoType;
        };
        Relationships: [];
      };
      users: {
        Row: {
          address: string | null;
          created_at: string;
          detailAddress: string | null;
          email: string;
          id: string;
          phone: string;
          point: number;
          role: string;
          username: string;
        };
        Insert: {
          address?: string | null;
          created_at?: string;
          detailAddress?: string | null;
          email: string;
          id?: string;
          phone: string;
          point?: number;
          role: string;
          username: string;
        };
        Update: {
          address?: string | null;
          created_at?: string;
          detailAddress?: string | null;
          email?: string;
          id?: string;
          phone?: string;
          point?: number;
          role?: string;
          username?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_users_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
        Database['public']['Views'])
    ? (Database['public']['Tables'] &
        Database['public']['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never;

export type InsertUserType = Database['public']['Tables']['users']['Insert'];
export type UserType = Database['public']['Tables']['users']['Row'];
export type InsertProductType =
  Database['public']['Tables']['products']['Insert'];
export type ProductType = Database['public']['Tables']['products']['Row'];
export type InsertCouponType =
  Database['public']['Tables']['coupons']['Insert'];
export type CouponType = Database['public']['Tables']['coupons']['Row'];
