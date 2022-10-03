import Match from '../database/models/Match';
import modelQueries from './helpers/queries';
import matchTypes from '../helpers/matchTypes';

export default class MatchModel {
  public getAllMatches = async (): Promise<Match[]> => Match
    .findAll({ include: modelQueries.matchInclude });

  public getOnGoingMatches = async (inProgress:string): Promise<Match[]> => Match
    .findAll({ include: modelQueries.matchInclude, where: { inProgress } });

  public createMatch = async (matchInfos: matchTypes): Promise<Match> =>
    Match.create({ ...matchInfos, inProgress: 'true' });

  public changeStatus = async (id: string): Promise<[number, Match[]]> =>
    Match.update({ inProgress: 'false' }, { where: { id } });

  public updateOnGoingMatches =
  async (id: string, updates: { homeTeamGoals: string, awayTeamGoals: string })
  : Promise<[number, Match[]]> =>
    Match.update({
      homeTeamGoals: updates.homeTeamGoals,
      awayTeamGoals: updates.awayTeamGoals,
    }, { where: { id } });
}
