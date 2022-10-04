type typeTeamName = {
  teamName: string
};

type MatchType = {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress?: string;
  teamHome?: typeTeamName;
  teamAway?: typeTeamName;
};

type LeaderBoardType = {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: string
};

export { LeaderBoardType, MatchType };
