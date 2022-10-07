import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';
import LeaderBoardCalcultator from '../helpers/LeaderBoardCalcultator';

export default class LeaderBoardService {
  // evoking both classes to have access to the database
  private _teamModel = new TeamModel();
  private _matchModel = new MatchModel();

  // getting every info I need from database
  public getRawData = async () => {
    const matches = await this._matchModel.getOnGoingMatches('false');
    const teams = await this._teamModel.getAllTeams();

    return { teams, matches };
  };

  // method to send to the class the hosts
  public getHomeMatches = async () => {
    const { teams, matches } = await this.getRawData();

    // executing the calculator to every team and sending the games that they're hosts
    return teams.map((team) => new LeaderBoardCalcultator(team, matches
      .filter((match) => match.homeTeam === team.id)).finalBoard());
  };

  public getAwayMatches = async () => {
    const { teams, matches } = await this.getRawData();

    // executing the calculator to every team and sending the games that they're guests
    return teams.map((team) => new LeaderBoardCalcultator(team, matches
      .filter((match) => match.awayTeam === team.id)).finalBoard());
  };

  public getAllMatches = async () => {
    const { teams, matches } = await this.getRawData();

    // sending all matches
    return teams.map((team) => new LeaderBoardCalcultator(team, matches).finalBoard());
  };
}
