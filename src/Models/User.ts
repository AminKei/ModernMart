/* register: */
export interface UserRegisterBody {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface UserRegisterResponse {
  email: string;
  password: string;
  name: string;
  avatar: string;
  role: string;
  id: number;
}

/* login: */

export interface LoginUserBody {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  access_token: string;
  refresh_token: string;
}

/* profile : */

export interface UserProfile {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}
