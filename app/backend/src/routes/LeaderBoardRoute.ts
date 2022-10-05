import { Router } from 'express';
import LeaderBoardController from '../controllers/LeaderBoardController';

const leaderBoardRoute = Router();
const leaderController = new LeaderBoardController();

leaderBoardRoute.get('/', leaderController.allMatchesStatus);
leaderBoardRoute.get('/home', leaderController.homeTeamStatus);
leaderBoardRoute.get('/away', leaderController.awayTeamStatus);

export default leaderBoardRoute;
