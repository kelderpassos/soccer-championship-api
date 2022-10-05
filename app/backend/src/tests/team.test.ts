import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http');
import { teste, teamByPK } from './mocks/teamsMocks';
import Team from '../database/models/Team';

chai.use(chaiHttp)
const { expect } = chai;

describe('/teams', () => {
  describe('GET', () => {

    afterEach(() => {
      sinon.restore();
    });

    it('should return all teams in the database', async () => {
      sinon.stub(Team, 'findAll').resolves(teste as any) ;
      const response = await chai.request(app).get('/teams').send();

      expect(response.status).to.equal(200); // test the return
      // A ASSERÇÃO ABAIXO ESTA QUEBRANDO
      // A ASSERÇÃO ABAIXO ESTA QUEBRANDO
      // A ASSERÇÃO ABAIXO ESTA QUEBRANDO
      expect(response.body).to.deep.equal(teste)
    });
    
    it('should return a single team', async () => {
      sinon.stub(Team, 'findOne').resolves(teamByPK as any);
      const response = await chai.request(app).get(`/teams/1`).send();

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(teamByPK)
    });

    it('should return an error message in case of no response from database', async () => {
      sinon.stub(Team, 'findOne').resolves();
      const response = await chai.request(app).get(`/teams/1`);

      // TESTE FALHANDO
      // TESTE FALHANDO
      // TESTE FALHANDO
      expect(response.status).to.equal(404);
      expect(response.body.message).to.equal('Teams cannot be retrieved');
    });
  });
});
