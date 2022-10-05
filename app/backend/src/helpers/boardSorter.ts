import { LeaderBoardType } from '../types';

const boardSorter = (matchA: LeaderBoardType, matchB: LeaderBoardType) => {
  if (matchA.totalPoints > matchB.totalPoints) return -1;
  if (matchA.totalPoints === matchB.totalPoints) {
    const teste = matchA.goalsBalance > matchB.goalsBalance ? -1 : 1;
    if (matchA.goalsBalance === matchB.goalsBalance) {
      const teste2 = matchA.goalsFavor > matchB.goalsFavor ? -1 : 1;
      if (matchA.goalsFavor === matchB.goalsFavor) return -1;
      return teste2;
    }
    return teste;
  }
  return 1;
};

export default boardSorter;
