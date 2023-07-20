import { Product } from '../../src/types/Product';


const invalidProduct = {
		names: 2,
		prices: 2,
		orderIds: 2,
}

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

const withouName: Product = {
	id: 1,
	name: '',
	price: '30 peças de ouro',
	orderId : 4,
}

const withoutPrice: Product = {
	id: 1,
	name: 'Machado do Thor',
	price: '',
	orderId : 4,
}

const withoutNameAndPrice: Product = {
	id: 1,
	name: '',
	price: '',
	orderId : 4,
}

const nameLength: Product = {
	id: 1,
	name: 'Ma',
	price: '30 peças de ouro',
	orderId : 4,
}

const nameNotString = {
	id: 1,
	name: 1,
	price: '30 peças de ouro',
	orderId : 4,
}

const priceLength: Product = {
	id: 1,
	name: 'Machado do Thor',
	price: '30',
	orderId : 4,
}

const priceNotString = {
	id: 1,
	name: 'Machado do Thor',
	price: 30,
	orderId : 4,
}


export default {
    completProduct,
    productList,
		withouName,
		withoutPrice,
		withoutNameAndPrice,
		nameLength,
		nameNotString,
		priceLength,
		priceNotString,
		invalidProduct,
};