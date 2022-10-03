import LeaderBoardModel from '../models/LeaderBoardModel';

export default class LeaderBoardService {
  private leaderBoardModel = new LeaderBoardModel();

  getAllFinishedMatches = async () => this.leaderBoardModel.getAllFinishedMatches();
}
