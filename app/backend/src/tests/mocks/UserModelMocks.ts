import { IUser, IUserModel } from '../../interfaces/User.interface'

const mockUser: IUser = {
  id: 1,
  username: 'admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: 'admin_password',
}

class UserModelMock implements IUserModel {
  async findOne(): Promise<IUser> {
    return mockUser;
  }
  
}

export { UserModelMock };
