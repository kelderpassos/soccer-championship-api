import Match from '../database/models/Match';
import modelQueries from './helpers/queries';

export default class LeaderBoardModel {
  public getAllFinishedMatches = async () =>
    Match.findAll({ include: modelQueries.matchInclude, where: { inProgress: '0' } });
}
