import Team from '../../database/models/Team';

const modelQueries = {
  matchInclude: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
    { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }],
};

export default modelQueries;
