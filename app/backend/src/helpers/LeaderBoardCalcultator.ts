import Team from '../database/models/Team';
import Match from '../database/models/Match';

export default class LeaderBoardCalcultator {
  // the initial values of the board
  private _team: Team; // return from the table Team
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

  // the calculator will receive the matches and the teams to select who's the host or guest
  constructor(team: Team, matches: Match[]) {
    this._team = team;
    this._matches = matches;
  }
}
