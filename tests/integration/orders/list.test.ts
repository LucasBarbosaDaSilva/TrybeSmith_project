import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import orderMock from '../../mocks/order.mock';
import OrderModel from '../../../src/database/models/order.model';

chai.use(chaiHttp);

describe('GET /orders', function () {

  it('should return an array of orders', async function () {
    const orderList = OrderModel.build(orderMock.orderList[0]);
    sinon.stub(OrderModel, 'findAll').resolves([orderList]);

    const response = await chai.request(app).get('/orders');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.an('array');
  });

  beforeEach(function () { sinon.restore(); });

});
