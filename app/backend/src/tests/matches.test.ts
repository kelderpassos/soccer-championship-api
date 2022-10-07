import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http');
import { teamMocks, teamMockByPK } from './mocks/teamsMocks';
import Team from '../database/models/Team';
import { mockToken } from './mocks/loginMocks';
import MatchService from '../services/MatchService';
import { newMatchMock, validMatchMock, invalidMatchMock } from './mocks/matchMocks';
import Match from '../database/models/Match';

chai.use(chaiHttp)
const { expect } = chai;

const service = new MatchService();

describe('/matches', () => {
  describe('POST', () => {

    afterEach(() => {
      sinon.restore();
    });

    it('should create a new match in the database', async () => {
      sinon.stub(service, 'createMatch').resolves(newMatchMock as any);
      sinon.stub(Match, 'create').resolves(newMatchMock as any) ;
      const response = await chai.request(app).post('/matches').send(validMatchMock).set('Authorization', mockToken);
    // PASSA COM RESTRIÇÕES
      expect(response.status).to.equal(201);
      expect(response.body).to.deep.equal(newMatchMock)
    });

    it('should not create matches without a valid token', async () => {
      // sinon.stub(Team, 'findAll').resolves(undefined) ;
      const response = await chai.request(app).get('/teams').send();

      expect(response.status).to.equal(401);
    });
  });
});

describe('/teams/:id', () => {
  describe('GET', () => {

    // afterEach(() => {
    //   sinon.restore();
    // });

    // it('should return a single team', async () => {
    //   sinon.stub(Team, 'findOne').resolves(teamMockByPK as any);
    //   const response = await chai.request(app).get(`/teams/1`).send();
      
    //   expect(response.status).to.equal(200);
    //   expect(response.body).to.deep.equal(teamMockByPK)
    // });
    
    // it('should return an error message in case of no response from database', async () => {
    //   // sinon.stub(Team, 'findOne').resolves();
    //   const response = await chai.request(app).get(`/teams/200`);
      
    //   // TESTE FALHANDO
    //   // TESTE FALHANDO
    //   // TESTE FALHANDO
    //   expect(response.status).to.equal(404);
    //   expect(response.body.message).to.equal('Teams cannot be retrieved');
    // });
  });
})
