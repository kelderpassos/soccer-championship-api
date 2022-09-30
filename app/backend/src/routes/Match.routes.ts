import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchRoute = Router();
const matchController = new MatchController();

matchRoute.get('/', matchController.getOnGoingMatches);
matchRoute.get('/', matchController.getAllMatches);

export default matchRoute;
