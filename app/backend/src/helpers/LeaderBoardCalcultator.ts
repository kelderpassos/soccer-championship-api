import Team from '../database/models/Team';
import Match from '../database/models/Match';

export default class LeaderBoardCalcultator {
  // the initial values of the board
  private _teams: Team; // return from the table Team
  private _matches: Match[]; // return from the table Match
  private _totalPoints = 0;
  private _totalGames = 0;
  private _totalVictories = 0;
  private _totalDraws = 0;
  private _totalLosses = 0;
  private _goalsFavor = 0;
  private _goalsOwn = 0;
  private _goalsBalance = 0;
  private _efficiency = 0;

  // what the calculator will receive
  constructor(teams: Team, matches: Match[]) {
    this._teams = teams;
    this._matches = matches;
  }
}
