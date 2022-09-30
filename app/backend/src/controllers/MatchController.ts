import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  matchService = new MatchService();

  public getAllMatches = async (_req: Request, res: Response) => {
    try {
      const allMatches = await this.matchService.getAllMatches();
      return res.status(200).json(allMatches);
    } catch (error) {
      console.error(error);
    }
  };

  // public getOnGoingMatches = async (req: Request, res: Response) => {
  //   // const { q } = req.query;

  //   // const matchesInProgress = await this.matchService.getOnGoingMatches(q);

  //   // return res.status(200).json(matchesInProgress);
  // };
}
