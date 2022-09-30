import Team from '../../database/models/Team';

const modelQueries = {
  getAllMatches: { include: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
    { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }] },
  getOnGoingMatches: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
    { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }],
};

export default modelQueries;
