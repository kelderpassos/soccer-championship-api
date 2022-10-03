import LeaderBoardModel from '../models/LeaderBoardModel';

export default class LeaderBoardService {
  private leaderBoardModel = new LeaderBoardModel();

  getAllFinishedMatches = async () => this.leaderBoardModel.getAllFinishedMatches();

  public getHomeTeamVictories = async () => {
    const allMatches = await this.getAllFinishedMatches();

    const victories = allMatches.filter(({ homeTeamGoals, awayTeamGoals }) =>
      Number(homeTeamGoals) > Number(awayTeamGoals));

    return victories;
  };

  public getHomeTeamDefeats = async () => {
    const allMatches = await this.getAllFinishedMatches();
    const defeats = allMatches.filter(({ homeTeamGoals, awayTeamGoals }) =>
      Number(homeTeamGoals) < Number(awayTeamGoals));

    return defeats;
  };

  public getHomeTeamTies = async () => {
    const allMatches = await this.getAllFinishedMatches();
    const victories = allMatches.filter(({ homeTeamGoals, awayTeamGoals }) =>
      Number(homeTeamGoals) === Number(awayTeamGoals));

    return victories;
  };

  public getTeamGoalsFavor = async () => {
    const allMatches = await this.getAllFinishedMatches();
    const goalsFavor = allMatches.reduce((acc, { homeTeam, homeTeamGoals }) => {
      const teste = {
        name: homeTeam,
        goalsFavor: acc + homeTeamGoals,
      };
      return teste;
    }, 0);

    return goalsFavor;
  };
}
