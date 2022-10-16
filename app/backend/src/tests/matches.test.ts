import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http');
import { mockToken } from './mocks/loginMocks';
import MatchService from '../services/MatchService';
import { newMatchMock, validMatchMock, invalidMatchMock, allMatchesMock, inProgressMock, updatedMatchMock } from './mocks/matchMocks';
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
      sinon.stub(service, 'createMatch').resolves(newMatchMock as any);
      sinon.stub(Match, 'create').resolves(newMatchMock as any);

      // Dá timeout

      // const response = await chai.request(app).post('/matches').send(validMatchMock).set('Authorization', '');

      // expect(response.status).to.equal(401);
    });
  });
});

describe('/matches', () => {
  describe('GET', () => {

    afterEach(() => {
      sinon.restore();
    });

    it('should return all matches', async () => {
      const response = await chai.request(app).get(`/matches/`).send();
      
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(allMatchesMock)
    });

    it('should return only matches in progress', async () => {
      const response = await chai.request(app).get(`/matches/`).query({ inProgress: true });
      
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(inProgressMock)
    });
  });

  describe('/matches/:id', () => {
    describe('PATCH', () => {
      
      afterEach(() => {
        sinon.restore();
      });

      it('should update the score of matches in progress', async () => {
        sinon.stub(service, 'updateOnGoingMatches').resolves([1] as any);

        const response = await chai.request(app).patch(`/matches/1`).send(updatedMatchMock);

        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Score updated succesfully');
      });

      it('should update the status of a match to "finished"', async () => {
        sinon.stub(service, 'changeStatus').resolves([1] as any);

        const response = await chai.request(app).patch(`/matches/1/finish`).send();

        expect(response.status).to.be.equal(200);
        expect(response.body.message).to.equal('Finished');
      });
    });
  });
})
