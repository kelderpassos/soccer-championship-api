import { UserType } from "../../types";

const mockUser: UserType = {
  id: 1,
  username: 'admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: 'admin_password',
}

class UserModelMock {
  async findOne(): Promise<UserType> {
    return mockUser;
  }
  
}

export { UserModelMock };
