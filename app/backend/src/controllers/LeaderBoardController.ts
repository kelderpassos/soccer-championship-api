import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';

export default class LeaderBoardController {
  private leaderBoardService = new LeaderBoardService();

  public homeTeamStatus = async (_req: Request, res: Response) => {
    const boardResults = await this.leaderBoardService.getHomeMatches();
    const sortResults = boardResults.sort((matchA, matchB) => {
      if (matchA.totalPoints > matchB.totalPoints) return -1;
      if (matchA.totalPoints === matchB.totalPoints) {
        const teste = matchA.goalsBalance > matchB.goalsBalance ? -1 : 1;
        if (matchA.goalsBalance === matchB.goalsBalance) {
          const teste2 = matchA.goalsFavor > matchB.goalsFavor ? -1 : 1;
          if (matchA.goalsFavor === matchB.goalsFavor) return -1;
          return teste2;
        }
        return teste;
      }
      return 1;
    });

    return res.status(200).json(sortResults);
  };

  public awayTeamStatus = async (_req: Request, res: Response) => {
    const boardResults = await this.leaderBoardService.getAwayMatches();

    return res.status(200).json(boardResults);
  };

  public allMatchesStatus = async (_req: Request, res: Response) => {
    const boardResults = await this.leaderBoardService.getAllMatches();

    return res.status(200).json(boardResults);
  };
}
