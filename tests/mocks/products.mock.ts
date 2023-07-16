import { Product } from '../../src/types/Product';

const productNoName: Product = {
    id: 1,
    name: '',
    price: '30 peças de ouro',
    orderId : 4,
}

const productWithoutPrice: Product = {
    id: 1,
    name: 'Machado do Thor',
    price: '',
    orderId : 4,
}
const productWithoutOrderId: Product = {
    id: 1,
    name: 'Machado do Thor',
    price: '30 peças de ouro',
    orderId : 0,
}

const productFullInfo: Product = {
    id: 1,
    name: 'Machado do Thor',
    price: '30 peças de ouro',
    orderId : 4,
}

export default {
    productNoName,
    productWithoutPrice,
    productWithoutOrderId,
    productFullInfo,
};