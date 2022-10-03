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

  public getAllMatches = async (_req: Request, res: Response) => {
    try {
      const allMatches = await this.matchService.getAllMatches();
      return res.status(200).json(allMatches);
    } catch (error) {
      console.error(error);
    }
  };

  public getOnGoingMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    const stringInProgress = String(inProgress);

    const matchesInProgress = await this.matchService.getOnGoingMatches(stringInProgress);

    return res.status(200).json(matchesInProgress);
  };

  public createMatch = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(401)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }

    try {
      const newMatch = await this.matchService
        .createMatch({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals });
      return res.status(201).json(newMatch);
    } catch (error) {
      console.error(error);
    }
  };

  public changeStatus = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await this.matchService
        .changeStatus(id);
      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      console.error(error);
    }
  };
}
