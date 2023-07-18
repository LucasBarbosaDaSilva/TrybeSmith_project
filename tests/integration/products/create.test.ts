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

    const response = ProductModel.build(productMock.completProduct);
    sinon.stub(ProductModel, 'create').resolves(response);

    const requestHttp = productMock.completProduct;

    const httpResponse = await chai.request(app).post('/products').send(requestHttp);

    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(productMock.completProduct);

  });

  it('Create a product without name', async function () {
      
      const requestHttp = productMock.withouName;
  
      const httpResponse = await chai.request(app).post('/products').send(requestHttp);
  
      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.be.deep.equal({ message: '"name" is required' });
  
    }
  );
});
