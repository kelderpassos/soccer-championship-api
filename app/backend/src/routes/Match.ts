import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchRoute = Router();
const matchController = new MatchController();

matchRoute.post('/', matchController.createMatch);
matchRoute.get('/', matchController.verifyRoute);

export default matchRoute;
