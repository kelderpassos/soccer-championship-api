import Match from '../database/models/Match';
import MatchModel from '../models/MatchModel';
import matchTypes from '../helpers/matchTypes';

export default class MatchService {
  matchModel = new MatchModel();

  public getAllMatches = async (): Promise<Match[]> => this.matchModel.getAllMatches();

  public getOnGoingMatches = async (query: string): Promise<Match[]> =>
    (query === 'false' ? this.matchModel.getOnGoingMatches('0')
      : this.matchModel.getOnGoingMatches('1'));

  public createMatch = async (matchInfos: matchTypes): Promise<Match> => {
    console.log(matchInfos);

    return this.matchModel.createMatch(matchInfos);
  };

  public changeStatus = async (id: string) =>
    this.matchModel.changeStatus(id);
}
