// File: lib/session.ts

/**
 * Set the authentication token in session storage.
 * @param {string} token - The authentication token.
 */
export function setToken(token: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('okta-token-storage', token);
    }
  }
  
  /**
   * Get the authentication token from session storage.
   * @returns {string|null} - The authentication token or null if not present.
   */
  export function getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('okta-token-storage');
    }
    return null;
  }
  
  /**
   * Set user data in session storage.
   * @param {Object} user - The user object.
   */
  export function setUser(user: any) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user-data', JSON.stringify(user));
    }
  }
  
  /**
   * Get user data from session storage.
   * @returns {Object|null} - The user data or null if not present.
   */
  export function getUser() {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user-data');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }
  
  /**
   * Clear the session storage, removing the token and user data.
   */
  export function clearSession() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('okta-token-storage');
      localStorage.removeItem('user-data');
    }
  }