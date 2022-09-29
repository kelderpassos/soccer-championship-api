import { ITeam, ITeamModel } from '../interfaces/Team.interface';
import Team from '../database/models/Team';

export default class TeamModel {
  public getAllTeams = async () => Team.findAll();
}

// export default class UserModel {
//   public login = async (email:string): Promise <IUser> =>
//     await User.findOne({ where: { email } }) as IUser & { id: number };
// }
