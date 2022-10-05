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

type TeamType = {
  id?: number;
  teamName: string;
};

type TeamModelType = {
  getAllTeams(): Promise<TeamType>
};

type UserType = {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
};

type UserModelType = {
  login(): Promise<UserType>
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

export {
  LeaderBoardType, MatchType, TeamModelType, UserModelType, UserType, TeamType,
};
