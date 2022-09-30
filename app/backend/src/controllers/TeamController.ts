import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

export default class TeamController {
  private teamService = new TeamService();

  public getAllTeams = async (_req: Request, res: Response) => {
    const allTeams = await this.teamService.getAllTeams();

    return res.status(200).json(allTeams);
  };
}
