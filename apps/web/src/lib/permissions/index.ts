/**
 * User Permission Foundation
 * 
 * Defines and verifies scopes and actions for resources.
 */

export type Resource = 'documents' | 'memory' | 'finance' | 'calendar' | 'services' | 'ai_actions';
export type Action = 'read' | 'write' | 'delete' | 'execute';

export interface Permission {
  resource: Resource;
  action: Action[];
  scope: 'private' | 'shared' | 'public';
}

export interface UserContext {
  id: string;
  role: 'user' | 'admin';
  permissions: Permission[];
}

/**
 * Checks if a user has permission to perform an action on a resource.
 */
export const hasPermission = (user: UserContext, resource: Resource, action: Action): boolean => {
  if (user.role === 'admin') return true;
  
  const permission = user.permissions.find(p => p.resource === resource);
  if (!permission) return false;
  
  return permission.action.includes(action);
};
