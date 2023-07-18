import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import  app  from '../../../src/app';
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Return a error without username', async function () {
        
        const requestHttp = loginMock.noUserValid;
    
        const httpResponse = await chai.request(app).post('/login').send(requestHttp);
    
        expect(httpResponse.status).to.equal(400);
        expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
    
      });

  it('Return a error without password', async function () {
          
          const requestHttp = loginMock.noPasswordValid;
      
          const httpResponse = await chai.request(app).post('/login').send(requestHttp);
      
          expect(httpResponse.status).to.equal(400);
          expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
      
        });

  it('If User no exist in body', async function () {

    const response = loginMock.noExistUser;
    sinon.stub(UserModel, 'findOne').resolves(null);

    const requestHttp = await chai.request(app).post('/login').send(response);

    expect(requestHttp.status).to.equal(401);
    expect(requestHttp.body).to.be.deep.equal({ message: 'Username or password invalid' });
              
    });

});
