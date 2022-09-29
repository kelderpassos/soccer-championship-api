import IUser from '../interfaces/User.interface';
import User from '../database/models/User';

export default class UserModel {
  public login = async (email:string): Promise <IUser> =>
    await User.findOne({ where: { email } }) as IUser;
}
