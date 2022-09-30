// import { ITeam, ITeamModel } from '../interfaces/Team.interface';
import Team from '../database/models/Team';

export default class TeamModel {
  public getAllTeams = async (): Promise<Team[]> => Team.findAll();
}
