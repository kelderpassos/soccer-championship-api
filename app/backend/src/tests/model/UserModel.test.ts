// import * as sinon from 'sinon';
// import * as chai from 'chai';
// import { UserModelMock } from '../mocks/UserModelMocks'
// import User from '../../database/models/User'
// import UserModel from '../../models/UserModel'


// const { expect } = chai;

// describe('Test UserModel', () => {
//   const user = new UserModelMock();
//   const model = new UserModel()
//   afterEach(() => {
//     sinon.restore()
//   });

//   it('should return a user infos from database', async () => {
//     sinon.stub(UserModelMock, 'findOne').resolves(UserModelMock);
//     // sinon.stub(model, 'login').resolves(UserModelMock);
//     const result = await model.login(UserModelMock.email)

//     expect(result).to.be.equal(UserModelMock);
//   });
// })