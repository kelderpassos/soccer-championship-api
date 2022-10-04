import LeaderBoardModel from '../models/LeaderBoardModel';

export default class LeaderBoardService {
  private leaderBoardModel = new LeaderBoardModel();

  getFinishedMatchesData = async () => {
    const allMatches = await this.leaderBoardModel.getAllFinishedMatches();
    const data = allMatches.map(({
      teamHome, homeTeamGoals, awayTeamGoals, teamAway,
    }) => ({ teamHome, homeTeamGoals, teamAway, awayTeamGoals }));

    return data;
  };

  public getHomeTeamVictories = async () => {
    const rawData = await this.getFinishedMatchesData();

    const victories = rawData.filter(({ homeTeamGoals, awayTeamGoals }) =>
      Number(homeTeamGoals) > Number(awayTeamGoals))
      .reduce((acc, { teamHome, homeTeamGoals }) => {
        console.log(teamHome, homeTeamGoals);
        return acc;
      }, 0);

    return victories;
  };

  // public getHomeTeamDefeats = async () => {
  //   const allMatches = await this.getAllFinishedMatches();
  //   const defeats = allMatches.filter(({ homeTeamGoals, awayTeamGoals }) =>
  //     Number(homeTeamGoals) < Number(awayTeamGoals));

  //   return defeats;
  // };

  // public getHomeTeamTies = async () => {
  //   const allMatches = await this.getAllFinishedMatches();
  //   const victories = allMatches.filter(({ homeTeamGoals, awayTeamGoals }) =>
  //     Number(homeTeamGoals) === Number(awayTeamGoals));

  //   return victories;
  // };
}
