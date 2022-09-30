import Team from '../database/models/Team';
import Match from '../database/models/Match';

export default class MatchModel {
  public getAllMatches = async (): Promise<Match[]> => Match
    .findAll({ include: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }] });

  public getOnGoingMatches = async (query:string): Promise<Match[]> => {
    console.log(query);

    return Match.findAll({ where: { inProgress: query } });
  };
}
