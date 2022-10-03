import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchRoute = Router();
const matchController = new MatchController();

matchRoute.post('/', matchController.createMatch);
matchRoute.get('/', matchController.verifyRoute);
matchRoute.patch('/:id', matchController.updateOnGoingMatches);
matchRoute.patch('/:id/finish', matchController.changeStatus);

export default matchRoute;
