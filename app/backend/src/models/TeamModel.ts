import Team from '../database/models/Team';

export default class TeamModel {
  public getAllTeams = async (): Promise<Team[]> => Team.findAll();
  public getTeamById = async (id: string): Promise<Team | null> => Team.findByPk(id);
}
