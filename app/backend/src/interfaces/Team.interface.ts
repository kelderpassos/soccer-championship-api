interface ITeam {
  id?: number;
  teamName: string;
}

interface ITeamModel {
  getAllTeams(): Promise<ITeam>
}

export { ITeam, ITeamModel };
