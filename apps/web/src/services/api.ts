/**
 * API Service Abstraction Layer
 * 
 * Provides a clean interface for the frontend to communicate with the NestJS backend.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export class ApiClient {
  private static async fetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
      // Authorization token would be injected here
    };

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers });
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
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

  // Auth, Profile, and other service layers will use this Client
}
