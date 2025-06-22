import api from '@/api/api';

export interface RegisterPayload {
  company_name: string;
  company_logo_url?: string | null;
  company_phone?: string | null;
  company_email_contact?: string | null;
  company_map_embed_url?: string | null;
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    company_id: string;
    created_at: string;
    updated_at: string;
  };
  company: {
    id: string;
    name: string;
    domain: string | null;
    logo_url: string | null;
    phone: string | null;
    email_contact: string | null;
    map_embed_url: string | null;
    created_at: string;
    updated_at: string;
  };
  status: number;
}

export async function register(payload: RegisterPayload): Promise<RegisterResponse> {
  const response = await api.post<RegisterResponse>('/register', payload);
  return response.data;
}