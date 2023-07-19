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


export default {
  orderList,
  newOrderWithouUserId,
  newOrder,
  sucessOrder,
  newOrderWithouProductsId,
};