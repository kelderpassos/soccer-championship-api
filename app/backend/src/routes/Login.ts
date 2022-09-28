import * as express from 'express';

import UserController from '../controllers/UserController';

const loginRoute = express.Router();
const userController = new UserController();

loginRoute.get('/', userController.login);

export default loginRoute;

// class LoginRoute {
//   userController = new UserController();
//   route = express.Router();

//   constructor() {
//     this.route.post('/login');
//   }

//   getRoute = () => this.route;
// }