import Match from '../database/models/Match';
import modelQueries from './helpers/queries';
import matchTypes from '../helpers/matchTypes';

export default class MatchModel {
  public getAllMatches = async (): Promise<Match[]> => Match
    .findAll(modelQueries.getAllMatches);

  public getOnGoingMatches = async (inProgress:string): Promise<Match[]> => Match
    .findAll({ include: modelQueries.getOnGoingMatches, where: { inProgress } });

  public createMatch = async (matchInfos: matchTypes): Promise<Match> =>
    Match.create({ ...matchInfos, inProgress: 'true' });
}
