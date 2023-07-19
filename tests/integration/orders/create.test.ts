import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import orderMock from '../../mocks/order.mock';



chai.use(chaiHttp);

describe('POST /orders', function () {
  beforeEach(function () { sinon.restore(); });

  it('Return withou token', async function () {
    const response = await chai.request(app).post('/orders').send(orderMock.newOrder);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.an('object');
    expect(response.body.message).to.be.equal('Token not found');
  });
  

});
