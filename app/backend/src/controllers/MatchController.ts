import { Request, Response } from 'express';
import { decode } from 'jsonwebtoken';
import MatchService from '../services/MatchService';

export default class MatchController {
  matchService = new MatchService();

  public verifyRoute = async (req: Request, res: Response) => {
    if (req.query.inProgress) {
      this.getOnGoingMatches(req, res);
      return;
    }
    this.getAllMatches(req, res);
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

    const matchesInProgress = await this.matchService.getOnGoingMatches(String(inProgress));

    return res.status(200).json(matchesInProgress);
  };

  public createMatch = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
    const { authorization } = req.headers;

    if (!authorization) throw new Error('No header provided');

    const validToken = decode(authorization);

    if (!validToken) return res.status(401).json({ message: 'Token must be a valid token' });

    if (homeTeam === awayTeam) {
      return res.status(401)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }

    const newMatch = await this.matchService
      .createMatch({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals });

    if (!newMatch) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }

    return res.status(201).json(newMatch);
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

  public updateOnGoingMatches = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    try {
      await this.matchService
        .updateOnGoingMatches(id, { homeTeamGoals, awayTeamGoals });
      return res.status(200).json({ message: 'Score updated succesfully' });
    } catch (error) {
      console.error(error);
    }
  };
}
