import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http');
import User from '../database/models/User';
import * as Jwt from 'jsonwebtoken';
import { mockToken, mockBody } from './mocks/UserModelMocks'

chai.use(chaiHttp)
const { expect } = chai;

describe('/login', () => {
  describe('POST', () => {

    afterEach(() => {
      sinon.restore();
    });

    it('should login successfully', async () => {
      const response = await chai.request(app).post('/login').send(mockBody);

      expect(response.status).to.equal(200);
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

describe('Tests /login/validate', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should return the user\'s role', async () => {
    sinon.stub(Jwt, 'verify').returns({ role: 'admin' } as any);
    
    const response = await chai.request(app).get('/login/validate').set('Authorization', mockToken);

    expect(response.status).to.equal(200);
    expect(response.body.role).to.equal('admin');
  });

  it('should return the user\'s role', async () => {
    sinon.stub(Jwt, 'verify').returns({ role: 'admin' } as any);
    
    const response = await chai.request(app).get('/login/validate');

    expect(response.status).to.equal(401);
    expect(response.body.message).to.equal('no valid token');
  });
});
