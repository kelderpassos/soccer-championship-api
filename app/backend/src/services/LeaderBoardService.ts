import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';
import Match from '../database/models/Match';
import Team from '../database/models/Team';

export default class LeaderBoardService {
  // evoking both classes to have access to the database
  private _teamModel = new TeamModel();
  private _matchModel = new MatchModel();

  // getting every info I need from database
  public getFinishedMatches = async (): Promise<Match[]> =>
    this._matchModel.getOnGoingMatches('false');

  public getAllTeams = async (): Promise<Team[]> => this._teamModel.getAllTeams();
}
