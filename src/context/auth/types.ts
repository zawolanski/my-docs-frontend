export interface IAuthData {
  email: string;
  firstname: string;
  lastname: string;
  _id: string;
  token: string;
}

export type SetAuthState = (data: IAuthData) => void;

export interface IAuthContext {
  data: IAuthData;
  setAuthState: SetAuthState;
  logout: () => void;
  isAuthenticated: () => boolean;
}
