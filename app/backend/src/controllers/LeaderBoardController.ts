import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';

export default class LeaderBoardController {
  private leaderBoardService = new LeaderBoardService();

  public homeTeamStatus = async (_req: Request, res: Response) => {
    const teste = await this.leaderBoardService.getHomeMatches();

    return res.status(200).json(teste);
  };

  public awayTeamStatus = async (_req: Request, res: Response) => {
    const teste = await this.leaderBoardService.getAwayMatches();

    return res.status(200).json(teste);
  };
}
