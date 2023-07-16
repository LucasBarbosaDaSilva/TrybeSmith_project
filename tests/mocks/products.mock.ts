import { Product } from '../../src/types/Product';


const completProduct: Product = {
    id: 1,
    name: 'Machado do Thor',
    price: '30 peças de ouro',
    orderId : 4,
}

const productList = [
    {
		id : 1,
		name : 'Excalibur',
		price : '10 peças de ouro',
		orderId : 1
	},
	{
		id : 2,
		name : 'Espada Justiceira',
		price : '20 peças de ouro',
		orderId : 1
	},
	{
		id : 3,
		name : 'Lira de Orfeu',
		price : '1 peça de ouro',
		orderId : 2
	}
]

export default {
    completProduct,
    productList
};