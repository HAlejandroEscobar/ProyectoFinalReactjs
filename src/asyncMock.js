const products = [
    {
      id: 1,
      title: 'PlayStation 1',
      price: '500 USD',
      category: 'play',
      description: 'Consola de video juegos marca SONY',
      stock: '10',
      image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PSX-Console-wController.png/1200px-PSX-Console-wController.png'
        
    },
    {
      id: 2,
      title: 'PlayStation 2',
      price: '1000 USD',
      category: 'play',
      description: 'Consola de video juegos marca SONY',
      stock: '10',
      image:
      'https://m.media-amazon.com/images/I/61pETE6v4vL.jpg'    },
    {
      id: 3,
      title: 'PlayStation 3',
      price: '1500 USD',
      category: 'play',
      description: 'Consola de video juegos marca SONY',
      stock: '10',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/d3/Sony-PlayStation-3-2001A-wController-L.jpg',
    },
    {
      id: 4,
      title: 'PlayStation 4',
      price: '2000 USD',
      category: 'play',
      description: 'Consola de video juegos marca SONY',
      stock: '10',
      image:
        'https://gmedia.playstation.com/is/image/SIEPDC/ps4-pro-product-thumbnail-01-en-14sep21?$facebook$',
    },
    {
      id: 5,
      title: 'Xbox Clasico',
      price: '500 USD',
      category: 'xbox',
      description: 'Consola de video juegos marca Microsoft',
      stock: '10',
      image:
        'https://teknoscene.com/wp-content/uploads/2021/09/Xbox.png',
    },
    {
      id: 6,
      title: 'Xbox 360',
      price: '1000 USD',
      category: 'xbox',
      description: 'Consola de video juegos marca Microsoft',
      stock: '10',
      image:
        'https://tecnotiendas.com.co/wp-content/uploads/2018/07/xbox360-slim-precio-bogota.jpg',
    },
    {
      id: 7,
      title: 'Xbox Serie S',
      price: '2000 USD',
      category: 'xbox',
      description: 'Consola de video juegos marca Microsoft',
      stock: '10',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_850369-MLA74805962673_022024-O.webp',
    },
    {
      id: 8,
      title: 'Nintendo 64',
      price: '500',
      category: 'nintendo',
      description: 'Consola de video juegos marca Nintendo',
      stock: '10',
      image:
        'https://m.media-amazon.com/images/I/414qceK8d8L.jpg',
    },
    {
      id: 9,
      title: 'Nintendo Switch',
      price: '1500 USD',
      category: 'nintendo',
      description: 'Consola de video juegos marca Nintendo',
      stock: '10',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_845205-MLA70414548864_072023-O.webp',
    },
    {
      id: 10,
      title: 'GameCube',
      price: '800 USD',
      category: 'nintendo',
      description: 'Consola de video juegos marca Nintendo',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/2/2b/GameCube-Console-Set.png',
    },
  ];
  
  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 0);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };
  
  //falta getCategory -> filter
  
  export const getCategory = (category) => {
    return products.filter((product) => product.category === category);
    //va a retornar un array de prods que cumplan con esa condicion
  };
  
 