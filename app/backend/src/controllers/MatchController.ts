import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  matchService = new MatchService();

  public verifyRoute = async (request: Request, response: Response) => {
    if (request.query.inProgress) {
      this.getOnGoingMatches(request, response);
      return;
    }
    this.getAllMatches(request, response);
  };

  getAllMatches = async (_req: Request, res: Response) => {
    try {
      const allMatches = await this.matchService.getAllMatches();
      return res.status(200).json(allMatches);
    } catch (error) {
      console.error(error);
    }
  };

  getOnGoingMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    const stringInProgress = String(inProgress);

    const matchesInProgress = await this.matchService.getOnGoingMatches(stringInProgress);

    return res.status(200).json(matchesInProgress);
  };
}
