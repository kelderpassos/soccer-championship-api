import Team from '../database/models/Team';
import Match from '../database/models/Match';
import { MatchType } from '../types';

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

    this._matches.forEach(this.calculateResults);
    this.finalBoard();
  }

  // to be printed on the response
  finalBoard = () => ({
    name: this._team.teamName,
    totalPoints: this._totalPoints,
    totalGames: this._totalGames,
    totalVictories: this._totalVictories,
    totalDraws: this._totalDraws,
    totalLosses: this._totalLosses,
    goalsFavor: this._goalsFavor,
    goalsOwn: this._goalsOwn,
    goalsBalance: this._goalsBalance,
    efficiency: this._efficiency,
  });

  calculateResults = (match: Match): void => {
    this.calculateGoals(match);
    this.calculateVictories(match);
    this.calculateDraws(match);
    this.calculateDefeats(match);
  };

  calculateGoals = (match: Match): void => {
    const { id } = this._team;
    const { awayTeam, awayTeamGoals, homeTeam, homeTeamGoals } = match;

    if (id === homeTeam) {
      this._goalsFavor += homeTeamGoals;
      this._goalsOwn += awayTeamGoals;
      this._goalsBalance = homeTeamGoals - awayTeamGoals;
    }

    if (id === awayTeam) {
      this._goalsFavor += awayTeamGoals;
      this._goalsOwn += homeTeamGoals;
      this._goalsBalance = awayTeamGoals - homeTeamGoals;
    }
  };

  calculateVictories = (match: Match): void => {
    const { id } = this._team;
    const { awayTeam, awayTeamGoals, homeTeam, homeTeamGoals } = match;

    const homeTeamVictories = homeTeamGoals > awayTeamGoals
      ? this._totalVictories += 1 : this._totalVictories;

    const awayTeamVictories = homeTeamGoals < awayTeamGoals
      ? this._totalVictories += 1 : this._totalVictories;

    if (id === homeTeam) {
      this._totalVictories = homeTeamVictories;
    }
    if (id === awayTeam) {
      this._totalVictories = awayTeamVictories;
    }
  };

  calculateDraws = (match: Match): void => {
    const { id } = this._team;
    const { awayTeam, awayTeamGoals, homeTeam, homeTeamGoals } = match;

    const homeTeamDraws = homeTeamGoals === awayTeamGoals
      ? this._totalDraws += 1 : this._totalDraws;

    const awayTeamDraws = homeTeamGoals === awayTeamGoals
      ? this._totalDraws += 1 : this._totalDraws;

    if (id === homeTeam) {
      this._totalDraws = homeTeamDraws;
    }
    if (id === awayTeam) {
      this._totalDraws = awayTeamDraws;
    }
  };

  calculateDefeats = (match: Match): void => {
    const { id } = this._team;
    const { awayTeam, awayTeamGoals, homeTeam, homeTeamGoals } = match;

    const homeTeamDefeats = homeTeamGoals < awayTeamGoals
      ? this._totalLosses += 1 : this._totalLosses;

    const awayTeamDefeats = homeTeamGoals > awayTeamGoals
      ? this._totalDraws += 1 : this._totalDraws;

    if (id === homeTeam) {
      this._totalLosses = homeTeamDefeats;
    }
    if (id === awayTeam) {
      this._totalLosses = awayTeamDefeats;
    }
  };
}
