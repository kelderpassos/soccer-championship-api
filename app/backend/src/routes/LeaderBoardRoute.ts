import { Router } from 'express';
import LeaderBoardController from '../controllers/LeaderBoardController';

const leaderBoardRoute = Router();
const leaderController = new LeaderBoardController();

leaderBoardRoute.get('/home', leaderController.homeTeamStatus);

export default leaderBoardRoute;
