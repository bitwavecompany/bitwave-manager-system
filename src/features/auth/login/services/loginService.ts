import api from '@/api/api';

interface LoginPayload {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  company_id: string;
  created_at: string;
  updated_at: string;
}

interface LoginResponse {
  message: string;
  access_token: string;
  token_type: string;
  user: User;
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('login', payload);
  return response.data;
}