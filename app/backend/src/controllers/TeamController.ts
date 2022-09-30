import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

export default class TeamController {
  private teamService = new TeamService();

  public getAllTeams = async (_req: Request, res: Response) => {
    const allTeams = await this.teamService.getAllTeams();

    return res.status(200).json(allTeams);
  };

  public getTeamById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const teamById = await this.teamService.getTeamById(id);
      return res.status(200).json(teamById);
    } catch (error) {
      console.error(error);
    }
  };
}
