import Team from '../database/models/Team';
import Match from '../database/models/Match';
import modelQueries from './helpers/queries';
import IMatch from '../interfaces/Match.interface';

export default class LeaderBoardModel {
  public getAllFinishedMatches = async () => {
    const teste = await Match
      .findAll({ include: modelQueries.matchInclude, where: { inProgress: '0' } });
    return teste as unknown as IMatch[];
  };

  public getAllTeams = async () =>
    Team.findAll();

  // public getTeamsAndMatches = async () => Match
  //   .findAll({ include: modelQueries.teamInclude, where: { inProgress: '0' } });
}
