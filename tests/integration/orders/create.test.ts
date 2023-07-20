import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import orderMock from '../../mocks/order.mock';
import jasonWebToken from '../../../src/utils/jasonWebToken';
import jwt from 'jsonwebtoken';
import { TokenPayload } from '../../../src/types/User';



chai.use(chaiHttp);

describe('POST /orders', function () {
  beforeEach(function () { sinon.restore(); });

  it('Create a order', async function () {
    const token = jasonWebToken.generateToken({ id: 1, username: 'test' });
    const response = await chai.request(app).post('/orders').set('Authorization', `Bearer ${token}`).send(orderMock.newOrder);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('userId');
    expect(response.body).to.have.property('productIds');
  });

  it('Create a order with invalid token', async function () {
    const token = jasonWebToken.generateToken({ id: 1, username: 'test' });
    const response = await chai.request(app).post('/orders').set('Authorization', `Bearer ${token}1`).send(orderMock.newOrder);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.an('object');
    expect(response.body.message).to.be.equal('Invalid token');
  });

  it('Create a order without userId', async function () {
    const token = jasonWebToken.generateToken({ id: 1, username: 'test' });
    const response = await chai.request(app).post('/orders').set('Authorization', `Bearer ${token}`).send(orderMock.newOrderWithouUserId);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.an('object');
    expect(response.body.message).to.be.equal('"userId" is required');
  });

  it('Create a order without productsId', async function () {
    const token = jasonWebToken.generateToken({ id: 1, username: 'test' });
    const response = await chai.request(app).post('/orders').set('Authorization', `Bearer ${token}`).send(orderMock.newOrderWithouProductsId);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.an('object');
    expect(response.body.message).to.be.equal('"productIds" is required');
  });

  it('Create a order with productIds not array', async function () {
    const token = jasonWebToken.generateToken({ id: 1, username: 'test' });
    const response = await chai.request(app).post('/orders').set('Authorization', `Bearer ${token}`).send(orderMock.productIdsIsNotArray);

    expect(response.status).to.be.equal(422);
    expect(response.body).to.be.an('object');
    expect(response.body.message).to.be.equal('"productIds" must be an array');
  });

  it('Create a order with userId not number', async function () {
    const token = jasonWebToken.generateToken({ id: 1, username: 'test' });
    const response = await chai.request(app).post('/orders').set('Authorization', `Bearer ${token}`).send(orderMock.userIdIsNotNumber);

    expect(response.status).to.be.equal(422);
    expect(response.body).to.be.an('object');
    expect(response.body.message).to.be.equal('"userId" must be a number');
  });

  it('Return erro if productIds is empty', async function () {
    const token = jasonWebToken.generateToken({ id: 1, username: 'test' });
    const response = await chai.request(app).post('/orders').set('Authorization', `Bearer ${token}`).send(orderMock.productIdsArrayOff);

    expect(response.status).to.be.equal(422);
    expect(response.body).to.be.an('object');
    expect(response.body.message).to.be.equal('"productIds" must include only numbers');
  });


  it('Return withou token', async function () {
    const response = await chai.request(app).post('/orders').send(orderMock.newOrder);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.an('object');
    expect(response.body.message).to.be.equal('Token not found');
  });
  

});
