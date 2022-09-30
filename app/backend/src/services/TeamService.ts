import Team from '../database/models/Team';
import TeamModel from '../models/TeamModel';

export default class TeamService {
  private teamModel = new TeamModel();

  public getAllTeams = async (): Promise<Team[]> => {
    const allTeams = await this.teamModel.getAllTeams();
    return allTeams;
  };

  public getTeamById = async (id: string) => {
    const teamById = await this.teamModel.getTeamById(id);

    return teamById;
  };
}
