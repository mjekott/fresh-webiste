export interface User {
  /** Unique identifier (UUID) */
  id: string;
  /** Full name of the user */
  name: string;
  /** Email address (unique) */
  email: string;
  /**
   * URL to user avatar image
   * @nullable
   */
  avatar: string | null;
  /** Whether the user account is active */
  isActive: boolean;
  /**
   * Timestamp of last login
   * @nullable
   */
  lastLogin: string | null;
  /** ID of the role assigned to this user */
  roleId: string;
  /** Timestamp when the user was created */
  createdAt: string;
  /** Timestamp when the user was last updated */
  updatedAt: string;
}

export interface LoginDto {
  /** User email address */
  email: string;
  /** User password */
  password: string;
}

export interface AuthResponseDto {
  /** Authenticated user details */
  user: User;
  /** List of permission codes assigned to the user */
  permissions: string[];
  /** JWT access token (expires in 7 days) */
  accessToken: string;
  /** JWT refresh token (also sent as HTTP-only cookie) */
  refreshToken: string;
  /** Refresh token expiration date */
  refreshTokenExpires: string;
}

export interface AuthResponseDto {
  /** Authenticated user details */
  user: User;
  /** List of permission codes assigned to the user */
  permissions: string[];
  /** JWT access token (expires in 7 days) */
  accessToken: string;
  /** JWT refresh token (also sent as HTTP-only cookie) */
  refreshToken: string;
  /** Refresh token expiration date */
  refreshTokenExpires: string;
}
