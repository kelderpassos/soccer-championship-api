import Match from '../database/models/Match';
import MatchModel from '../models/MatchModel';

export default class MatchService {
  matchModel = new MatchModel();

  public getAllMatches = async (): Promise<Match[]> => this.matchModel.getAllMatches();
}
