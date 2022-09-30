import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const teamRoute = Router();
const teamController = new TeamController();

teamRoute.get('/', teamController.getAllTeams);
teamRoute.get('/:id', teamController.getTeamById);

export default teamRoute;
