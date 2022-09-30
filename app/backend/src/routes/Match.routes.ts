import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchRoute = Router();
const matchController = new MatchController();

matchRoute.get('/', matchController.verifyRoute);
// matchRoute.get('/', matchController.getOnGoingMatches);

export default matchRoute;
