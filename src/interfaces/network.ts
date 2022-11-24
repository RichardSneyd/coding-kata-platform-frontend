export interface IError {
  timestamp?: string;
  status?: number;
  error?: string;
  message?: string;
  path?: string;
}

export interface IResponse {
  data: {
    access_token: string;
    refresh_token: string;
  };
}

export interface IJWTUser {
  sub?: string;
  roles?: string[];
  iss?: string;
  exp?: number;
  userId?: number;
}

export interface ISignin extends IError, IJWTUser {}
