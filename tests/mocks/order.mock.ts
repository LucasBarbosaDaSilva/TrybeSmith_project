const orderList = [
  {
    id: 1,
    userId: 1,
  },
  {
    id: 2,
    userId: 2,
  },
  {
    id: 3,
    userId: 3,
  }
];

const newOrder = {
  id: 4,
  productIds: [1, 2, 3],
  userId: 1,
};

const sucessOrder = {
  productIds: [1, 2, 3],
  userId: 1,
};

const newOrderWithouUserId = {
  productIds: [1, 2, 3],
};
const newOrderWithouProductsId = {
  userId: 1,
};

const productIdsIsNotArray = {
  productIds: 1,
  userId: 1,
};

const userIdIsNotNumber = {
  productIds: [1, 2, 3],
  userId: '1',
};

const orderId = {
  orderId : 4,
  name: 'teste',
  price: 'teste',
  id: 4,
};


const productIdsArrayOff = {
  productIds: [ ],
  userId: 1,
};


export default {
  orderList,
  newOrderWithouUserId,
  newOrder,
  sucessOrder,
  newOrderWithouProductsId,
  productIdsIsNotArray,
  userIdIsNotNumber,
  productIdsArrayOff,
  orderId,
};