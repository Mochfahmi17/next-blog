/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 **/
export const publicRoutes = ["/", "/blog", "/about-us", "/contact"];

/**
 * An array of routes that are use for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 **/
export const authRoutes = [
  "/login",
  "/register",
  "/error",
  "/forgot-password",
  "/otp-verification",
  "/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 **/
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 **/
export const DEFAULT_LOGIN_REDIRECT = "/";

export const resetPassword = ["/otp-verification", "/reset-password"];
