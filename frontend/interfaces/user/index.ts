export interface IUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

export interface ILoginData {
  email: string;
  password: string;
}