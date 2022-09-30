import Match from '../database/models/Match';
import MatchModel from '../models/MatchModel';

export default class MatchService {
  matchModel = new MatchModel();

  public getAllMatches = async (): Promise<Match[]> => this.matchModel.getAllMatches();

  public getOnGoingMatches = async (query: string): Promise<Match[]> => {
    if (query === 'false') {
      return this.matchModel.getOnGoingMatches('0');
    }

    return this.matchModel.getOnGoingMatches('1');
  };
}
