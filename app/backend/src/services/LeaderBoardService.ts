import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';
import Match from '../database/models/Match';
import Team from '../database/models/Team';
import LeaderBoardCalcultator from '../helpers/LeaderBoardCalcultator';

export default class LeaderBoardService {
  // evoking both classes to have access to the database
  private _teamModel = new TeamModel();
  private _matchModel = new MatchModel();

  // getting every info I need from database
  public getFinishedMatches = async (): Promise<Match[]> =>
    this._matchModel.getOnGoingMatches('false');

  public getAllTeams = async (): Promise<Team[]> => this._teamModel.getAllTeams();

  // method to send to the class the hosts
  public getHomeMatches = async () => {
    const teams = await this.getAllTeams();
    const matches = await this.getFinishedMatches();

    // executing the calculator to every team and sending the games that they're hosts
    return teams.map((team) => new LeaderBoardCalcultator(team, matches
      .filter((match) => match.homeTeam === team.id)));
  };

  public getAwayMatches = async () => {
    const teams = await this.getAllTeams();
    const matches = await this.getFinishedMatches();

    // executing the calculator to every team and sending the games that they're hosts
    return teams.map((team) => new LeaderBoardCalcultator(team, matches
      .filter((match) => match.awayTeam === team.id)));
  };
}
