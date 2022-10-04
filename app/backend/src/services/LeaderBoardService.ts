import LeaderBoardModel from '../models/LeaderBoardModel';
import leaderBoard from '../helpers/leaderBoard';

export default class LeaderBoardService {
  private leaderBoardModel = new LeaderBoardModel();

  getFinishedMatchesData = async () => {
    const allMatches = await this.leaderBoardModel.getAllFinishedMatches();
    const data = allMatches.map(({
      teamHome, homeTeamGoals, awayTeamGoals, teamAway,
    }) => ({ teamHome, homeTeamGoals, teamAway, awayTeamGoals }));

    return data;
  };

  getGoalsInFavor = async () => {
    const data = getFinishedMatchesData();

    
  }
}

















































//
//
//
//
//
//
//
//
//
//

//
// .reduce((acc, { teamHome }) => {
//   const { teamName } = teamHome;
//   acc[teamName] = acc[teamName] ? acc[teamName] += 1 : 1;
//   return acc;
// }, {} as Record<string, number>);

// .reduce((acc, { teamHome }) => {
//   const { teamName } = teamHome;
//   acc[teamName] = acc[teamName] ? acc[teamName] += 1 : 1;
//   return acc;
// }, {} as Record<string, number>);
// return victories;

// .reduce((acc, { teamHome }) => {
//   const { teamName } = teamHome;
//   acc[teamName] = acc[teamName] ? acc[teamName] += 1 : 1;
//   return acc;
// }, {} as Record<string, number>);
// return victories;

// const callBack = (acc: Record<string, number>, { teamHome, homeTeamGoals }: { teamHome: Record<string, string>, homeTeamGoals: number }) => {
//   const { teamName } = teamHome;

//   acc[teamName] = acc[teamName] ? acc[teamName] + homeTeamGoals : homeTeamGoals;

//   return acc;
// };

/* funções anteriores */
/* funções anteriores */
/* funções anteriores */
/* funções anteriores */

// public getHomeTeamVictories = async () => {
//   const rawData = await this.getFinishedMatchesData();

//   return rawData
//     .filter(({ homeTeamGoals, awayTeamGoals }) => Number(homeTeamGoals) > Number(awayTeamGoals));
// };

// public getHomeTeamDraws = async () => {
//   const rawData = await this.getFinishedMatchesData();

//   return rawData
//     .filter(({ homeTeamGoals, awayTeamGoals }) =>
//       Number(homeTeamGoals) === Number(awayTeamGoals));
// };

// public getHomeTeamDefeats = async () => {
//   const rawData = await this.getFinishedMatchesData();

//   return rawData
//     .filter(({ homeTeamGoals, awayTeamGoals }) =>
//       Number(homeTeamGoals) < Number(awayTeamGoals));
// };

// public getGoalsInFavor = async () => {
//   const victories = await this.getHomeTeamVictories();
//   const draws = await this.getHomeTeamDraws();
//   const defeats = await this.getHomeTeamDefeats();

//   const goalsInFavorVictory = victories.reduce(callBack, {} as Record<string, number>);
//   const goalsInFavorDraw = draws.reduce(callBack, {} as Record<string, number>);
//   const goalsInFavorDefeat = defeats.reduce(callBack, {} as Record<string, number>);

//   return goalsInFavorDefeat;
// };
