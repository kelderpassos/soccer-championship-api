import * as sinon from 'sinon';
import * as chai from 'chai';
import * as mocha from 'mocha'
import { app } from '../app'
import { Response } from 'superagent';
// @ts-ignore
import chaiHttp = require('chai-http')
import UserController from '../controllers/UserController';
import auth from '../helpers/auth';
import User from '../database/models/User';
import { verify } from 'crypto';

chai.use(chaiHttp)
const { expect } = chai;

const mockBody = {
  email: "admin@admin.com",
  password: "secret_admin"
}

const mockResponse = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc" 
}
const mockAuth = { id: 1, role: 'admin', iat: 1664479422, exp: 1664565822 }

describe('/login', () => {
  describe('POST', () => {
    const controller = new UserController()

    afterEach(() => {
      sinon.restore();
    })

    it('should login successfully', async () => {
      const response = await chai.request(app).post('/login').send(mockBody);

      expect(response.status).to.equal(200);
    });

    it('should return the user\'s role', async () => {
      await chai.request(app).get('/login/validate').send();
      // sinon.stub(controller, 'validate').resolves(mockAuth.role)
      sinon.stub(auth, 'accessAllowed').resolves(mockAuth.role);


      expect(response).to.equal('admin');
    });

    it('should return an error if there\'s no email or password', async () => {
      const response = await chai.request(app).post('/login').send();

      expect(response.status).to.equal(400);
    });    

    it('should return an error if email or password are wrong', async () => {

      sinon.stub(User, 'findOne').resolves(undefined);

      const response = await chai.request(app).post('/login').send(mockBody);

      expect(response.status).to.equal(401);
    });   
  });
});
