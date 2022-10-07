const newMatchMock = {
  "id": 50,
  "homeTeam": 16,
  "homeTeamGoals": 2,
  "awayTeam": 8,
  "awayTeamGoals": 2,
  "inProgress": true,
}

const validMatchMock = {
  "homeTeam": 16,
  "homeTeamGoals": 2,
  "awayTeam": 8,
  "awayTeamGoals": 2
}

const invalidMatchMock = {
  "homeTeam": 8,
  "homeTeamGoals": 2,
  "awayTeam": 8,
  "awayTeamGoals": 2
}

export { newMatchMock, validMatchMock, invalidMatchMock };