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

  it('Create a product without price', async function () {
        
        const requestHttp = productMock.withoutPrice;
    
        const httpResponse = await chai.request(app).post('/products').send(requestHttp);
    
        expect(httpResponse.status).to.equal(400);
        expect(httpResponse.body).to.be.deep.equal({ message: '"price" is required' });
    
      }
  );

  it('Create a product without name and price', async function () {
            
            const requestHttp = productMock.withoutNameAndPrice;
        
            const httpResponse = await chai.request(app).post('/products').send(requestHttp);
        
            expect(httpResponse.status).to.equal(400);
            expect(httpResponse.body).to.be.deep.equal({ message: '"name" is required' });
        
          });

  it('Create a product with name length less than 3', async function () {
              
              const requestHttp = productMock.nameLength;
          
              const httpResponse = await chai.request(app).post('/products').send(requestHttp);
          
              expect(httpResponse.status).to.equal(422);
              expect(httpResponse.body).to.be.deep.equal({ message: '"name" length must be at least 3 characters long' });
          
            });

  it('Create a product with name not string', async function () {
                  
                  const requestHttp = productMock.nameNotString;
              
                  const httpResponse = await chai.request(app).post('/products').send(requestHttp);
              
                  expect(httpResponse.status).to.equal(422);
                  expect(httpResponse.body).to.be.deep.equal({ message: '"name" must be a string' });
              
                });

  it('Create a product with price length less than 3', async function () {
                      
                      const requestHttp = productMock.priceLength;
                  
                      const httpResponse = await chai.request(app).post('/products').send(requestHttp);
                  
                      expect(httpResponse.status).to.equal(422);
                      expect(httpResponse.body).to.be.deep.equal({ message: '"price" length must be at least 3 characters long' });
                  
                    });
  it('Create a product with price not string', async function () {
                            
                            const requestHttp = productMock.priceNotString;
                        
                            const httpResponse = await chai.request(app).post('/products').send(requestHttp);
                        
                            expect(httpResponse.status).to.equal(422);
                            expect(httpResponse.body).to.be.deep.equal({ message: '"price" must be a string' });
                        
                          });
  it('Testa camada service' , async function () {
    const response = ProductModel.build(productMock.completProduct);
    sinon.stub(ProductModel, 'create').resolves(response);
    const requestHttp = productMock.completProduct;
    const httpResponse = await chai.request(app).post('/products').send(requestHttp);
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(productMock.completProduct);
  });
});
