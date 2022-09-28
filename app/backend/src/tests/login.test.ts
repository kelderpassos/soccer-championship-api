import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
import { Response } from 'superagent';
import login from '../login';

import chaiHttp = require('chai-http');

chai.use(chaiHttp)
const { expect } = chai;

describe('Login', () => {
  let chaiHttpResponse: Response

  before(async () => {
    sinon.stub(login, 'teste').resolves('mock' as login)
  });

  after(() => {
    (login.teste as sinon.SinonStub).restore();
  });

  it('should be able to login', async () => {
    // expect()
  });
})