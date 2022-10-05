import { Request, Response } from 'express';
import boardSorter from '../helpers/boardSorter';
import LeaderBoardService from '../services/LeaderBoardService';

export default class LeaderBoardController {
  private leaderBoardService = new LeaderBoardService();

  public homeTeamStatus = async (_req: Request, res: Response) => {
    const boardResults = await this.leaderBoardService.getHomeMatches();

    return res.status(200).json(boardResults.sort(boardSorter));
  };

  public awayTeamStatus = async (_req: Request, res: Response) => {
    const boardResults = await this.leaderBoardService.getAwayMatches();

    return res.status(200).json(boardResults.sort(boardSorter));
  };

  public allMatchesStatus = async (_req: Request, res: Response) => {
    const boardResults = await this.leaderBoardService.getAllMatches();

    return res.status(200).json(boardResults);
  };
}
