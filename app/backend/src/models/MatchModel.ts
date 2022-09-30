import Team from '../database/models/Team';
import Match from '../database/models/Match';

export default class MatchModel {
  public getAllMatches = async (): Promise<Match[]> => Match
    .findAll({ include: [{ model: Team, as: 'home', attributes: { exclude: ['id'] } },
      { model: Team, as: 'away', attributes: { exclude: ['id'] } }] });
}
