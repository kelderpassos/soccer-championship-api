import User from '../database/models/User';

export default class UserModel {
  public login = async (email:string): Promise <User | null> => User.findOne({ where: { email } });
}
