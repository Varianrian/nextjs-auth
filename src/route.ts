/**
 * An array of public routes
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that used for authentication
 * These routes are protected and should not be accessed by unauthenticated users
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/logout",
  "/auth/callback",
  "/auth/error",
  "/auth/register",
];

/**
 * An array of routes that are used for api authentication
 * @type {string}
 */
export const apiAuthPrefix = "/api";

/**
 * An array of routes that are used for redirecting after login
 * @type {string}
 */
export const DEFAULT_REDIRECT_URL = "/home";
