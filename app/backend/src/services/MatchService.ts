import TeamModel from '../models/TeamModel';
import Match from '../database/models/Match';
import MatchModel from '../models/MatchModel';
import matchTypes from '../helpers/matchTypes';

export default class MatchService {
  matchModel = new MatchModel();
  teamModel = new TeamModel();

  public getAllMatches = async (): Promise<Match[]> => this.matchModel.getAllMatches();

  public getOnGoingMatches = async (query: string): Promise<Match[]> =>
    (query === 'false' ? this.matchModel.getOnGoingMatches('0')
      : this.matchModel.getOnGoingMatches('1'));

  public createMatch = async (matchInfos: matchTypes): Promise<Match | null > => {
    const getAllTeams = await this.teamModel.getAllTeams();

    const checkIfHomeTeamExists = getAllTeams
      .some(({ id }) => Number(id) === Number(matchInfos.homeTeam));
    const checkIfAwayTeamExists = getAllTeams
      .some(({ id }) => Number(id) === Number(matchInfos.awayTeam));

    if (!checkIfAwayTeamExists || !checkIfHomeTeamExists) {
      return null;
    }

    return this.matchModel.createMatch(matchInfos);
  };

  public changeStatus = async (id: string) =>
    this.matchModel.changeStatus(id);
}
