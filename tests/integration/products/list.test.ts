import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import  app  from '../../../src/app';
import productMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';
chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Return a list of products', async function () {
    
    const response = ProductModel.build(productMock.productList[0]);
    sinon.stub(ProductModel, 'findAll').resolves([response]);

    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal([productMock.productList[0]]);

  });

});
