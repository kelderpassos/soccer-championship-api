import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './Team';

class Match extends Model {
  id!: number;
  homeTeam!: number;
  awayTeam!: number;
  homeTeamGoals!: number;
  awayTeamGoals!: number;
  inProgress!: number;
}

Match.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeam: {
    allowNull: false,
    type: INTEGER,
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeam: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    allowNull: false,
    type: BOOLEAN,
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  tableName: 'matches',
});

Team.hasMany(Match, { foreignKey: 'id', as: 'team' });

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'home' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'away' });

export default Match;
