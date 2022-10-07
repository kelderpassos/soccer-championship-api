import { LeaderBoardType } from '../types';

const boardSorter = (matchA: LeaderBoardType, matchB: LeaderBoardType) => {
  if (matchA.totalPoints > matchB.totalPoints) return -1;
  if (matchA.totalPoints === matchB.totalPoints) {
    const goalsBalanceCondition = matchA.goalsBalance > matchB.goalsBalance ? -1 : 1;
    if (matchA.goalsBalance === matchB.goalsBalance) {
      const goalsFavorCondition = matchA.goalsFavor > matchB.goalsFavor ? -1 : 1;
      if (matchA.goalsFavor === matchB.goalsFavor) return -1;
      return goalsFavorCondition;
    }
    return goalsBalanceCondition;
  }
  return 1;
};

export default boardSorter;
