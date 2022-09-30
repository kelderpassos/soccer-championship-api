import Team from '../database/models/Team';
import TeamModel from '../models/TeamModel';

export default class TeamService {
  private teamModel = new TeamModel();

  public getAllTeams = async (): Promise<Team[]> => this.teamModel.getAllTeams();
  public getTeamById = async (id: string): Promise<Team | null> => this.teamModel.getTeamById(id);
}
