import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import  app  from '../../../src/app';
import productMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Create a product sucess', async function () {

    const createReturn = ProductModel.build(productMock.productFullInfo);
    sinon.stub(ProductModel, 'create').resolves(createReturn);

    const httpRequestBody = productMock.productFullInfo;

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(productMock.productFullInfo);

  });
});
