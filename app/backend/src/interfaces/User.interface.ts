interface IUser {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

interface IUserModel {
  login(): Promise<IUser>
}

export { IUser, IUserModel };
