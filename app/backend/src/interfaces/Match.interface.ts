type typeTeamName = {
  teamName: string
};

export default interface IMatch {
  id?: number;
  homeTeam?: number;
  homeTeamGoals?: number;
  awayTeam?: number;
  awayTeamGoals?: number;
  inProgress?: string;
  teamHome?: typeTeamName;
  teamAway?: typeTeamName;
}
