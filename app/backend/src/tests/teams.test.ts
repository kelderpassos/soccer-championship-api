import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http');
import { teamMocks, teamMockByPK } from './mocks/teamsMocks';
import Team from '../database/models/Team';

chai.use(chaiHttp)
const { expect } = chai;

describe('/teams', () => {
  describe('GET', () => {

    afterEach(() => {
      sinon.restore();
    }); 

    it('should return all teams in the database', async () => {
      sinon.stub(Team, 'findAll').resolves(teamMocks as any) ;
      const response = await chai.request(app).get('/teams').send();

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(teamMocks)
    });

    it('should return an error message', async () => {
      sinon.stub(Team, 'findAll').rejects();
      const response = await chai.request(app).get('/teams');

      expect(response.status).to.equal(404);
      expect(response.body.message).to.equal('Teams cannot be retrieved')
    });
  });
});

describe('/teams/:id', () => {
  describe('GET', () => {

    afterEach(() => {
      sinon.restore();
    });

    it('should return a single team', async () => {
      sinon.stub(Team, 'findOne').resolves(teamMockByPK as any);
      const response = await chai.request(app).get(`/teams/1`).send();
      
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(teamMockByPK)
    });
    
    it('should return an error message in case of no response from database', async () => {
      sinon.stub(Team, 'findOne').rejects();
      const response = await chai.request(app).get(`/teams/1`);
   
      expect(response.status).to.equal(404);
      expect(response.body.message).to.equal('Teams cannot be retrieved');
    });
  });
})
