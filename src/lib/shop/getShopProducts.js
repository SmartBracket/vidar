const products = [
    {
        id: 1,
        slug: 'product_1',
        name: 'Климадон в капсулах 20 шт.',
        image: '/shop/shopItem1.jpg',
        price: 150,
        category: 'Для детей',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inStock: true
    },
    {
        id: 2,
        slug: 'product_2',
        name: 'Ренгалин р-р д/вн. приема, 100 мл',
        image: '/shop/shopItem2.webp',
        price: 350,
        category: 'Обезбаливающее',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inStock: false
    },
    {
        id: 3,
        slug: 'product_3',
        name: 'Пиколинат хрома капли, 50 мл',
        image: '/shop/shopItem3.webp',
        price: 500,
        category: 'Обезбаливающее',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inStock: true
    },
    {
        id: 4,
        slug: 'product_4',
        name: 'Амброксол р-р д/вн. приема фл.',
        image: '/shop/shopItem4.webp',
        price: 300,
        category: 'Обезбаливающее',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inStock: false
    },
    {
        id: 5,
        slug: 'product_5',
        name: 'Листья ФармаЦвет ф/п, 1.5 г, 20 шт.',
        image: '/shop/shopItem5.webp',
        price: 100,
        category: 'Для детей',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inStock: true
    },
    {
        id: 6,
        slug: 'product_6',
        name: 'Климадон в капсулах',
        image: '/shop/shopItem1.jpg',
        price: 800,
        category: 'Для детей',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inStock: true
    },
    {
        id: 7,
        slug: 'product_7',
        name: 'Климадон в капсулах',
        image: '/shop/shopItem1.jpg',
        price: 800,
        category: 'Для детей',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inStock: true
    },
    {
        id: 8,
        slug: 'product_8',
        name: 'Климадон в капсулах',
        image: '/shop/shopItem1.jpg',
        price: 800,
        category: 'Для детей',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inStock: true
    },
    {
        id: 9,
        slug: 'product_9',
        name: 'Климадон в капсулах',
        image: '/shop/shopItem1.jpg',
        price: 800,
        category: 'Для детей',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inStock: true
    },
    {
        id: 10,
        slug: 'product_10',
        name: 'Климадон в капсулах',
        image: '/shop/shopItem1.jpg',
        price: 800,
        category: 'Для детей',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inStock: true
    },
    {
        id: 11,
        slug: 'product_11',
        name: 'Климадон в капсулах',
        image: '/shop/shopItem1.jpg',
        price: 800,
        category: 'Для детей',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inStock: true
    },
    {
        id: 12,
        slug: 'product_12',
        name: 'Климадон в капсулах',
        image: '/shop/shopItem1.jpg',
        price: 800,
        category: 'Для детей',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inStock: true
    },
]

function getProducts(filters){
    let productList = products
    if(filters?.category) productList = productList.filter((product) => product.category == filters.category)
    if(filters?.showInStock) productList = productList.filter((product) => product.inStock == true)
    if(filters?.sortBy){
        switch ( filters?.sortBy ){
            case 'cheap':
                productList = productList.sort((a,b) => a.price - b.price)
                break
            case 'expensive':
                productList = productList.sort((a,b) => b.price - a.price )
                break
        }
    }
    return productList
}
export default getProducts