/**
 * API Service Abstraction Layer
 * 
 * Provides a clean interface for the frontend to communicate with the NestJS backend.
 */

import { auth } from '@/lib/firebase';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export class ApiClient {
  private static async fetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    let token = '';
    let userId = '';
    
    if (auth.currentUser) {
      try {
        token = await auth.currentUser.getIdToken();
        userId = auth.currentUser.uid;
      } catch (e) {
        console.warn('Failed to get Firebase token', e);
      }
    }

    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...(userId ? { 'x-user-id': userId } : {}),
      ...options.headers,
    };

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers });
      
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
            window.location.href = '/login';
          }
        }
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error: any) {
      // Silently handle network errors (e.g. backend not deployed yet)
      // "Failed to fetch" means the server is unreachable — not a code bug
      if (error?.message === 'Failed to fetch' || error?.name === 'TypeError') {
        return null as T;
      }
      console.error(`[ApiClient Error] ${endpoint}:`, error);
      throw error;
    }
  }

  static async get<T>(endpoint: string) {
    return this.fetch<T>(endpoint, { method: 'GET' });
  }

  static async post<T>(endpoint: string, data: any) {
    return this.fetch<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  static async put<T>(endpoint: string, data: any) {
    return this.fetch<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  static async patch<T>(endpoint: string, data: any) {
    return this.fetch<T>(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  static async delete<T>(endpoint: string) {
    return this.fetch<T>(endpoint, { method: 'DELETE' });
  }

  // Auth, Profile, and other service layers will use this Client
}
