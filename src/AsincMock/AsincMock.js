const productos = [
  {
    id: "1",
    name: "Tv LED 32",
    description:
      "Pantallas que tienen por detras un plano con diodos led los cuales se iluminan todos de manera conjunta",
    category: "HD",
    size: '32"',
    image:
      "https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/3/5/353435_1.jpg",
    stock: "5",
    price: "30.000",
  },
  {
    id: "2",
    name: "Tv LED 50",
    description:
      "Pantallas que tienen por detras un plano con diodos led los cuales se iluminan todos de manera conjunta",
    category: "HD",
    size: '50"',
    image:
      "https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/3/5/353437.jpg",
    stock: "5",
    price: "40.000",
  },
  {
    id: "3",
    name: "Tv QLED 32",
    description:
      "Similar a las pantallas Led con la diferencia que por detras tiene una luz azul y que la misma convinandolas con azul y verde generan colores mas vivos",
    category: "FULL HD",
    size: '32"',
    image:
      "https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/3/5/353623_smart_tv_75_2_1.jpg",
    stock: "5",
    price: "50.000",
  },

  {
    id: "4",
    name: "Tv QLED 50",
    description:
      "Similar a las pantallas Led con la diferencia que por detras tiene una luz azul y que la misma convinandolas con azul y verde generan colores mas vivos",
    category: "FULL HD",
    size: '50"',
    image:
      "https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/3/5/353623_smart_tv_75_2_1.jpg",
    stock: "5",
    price: "70.000",
  },
  {
    id: "5",
    name: "Tv OLED 50",
    description:
      "Pantallas mas finas y eficientes dado que iluminan los led de manera individual logrando asi contrastes mas perfectos",
    category: "FHD 4K",
    size: '50"',
    image:
      "https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/3/5/353117_smart_tv_65_2.jpg",
    stock: "5",
    price: "90.000",
  },
  {
    id: "6",
    name: "Tv OLED 65",
    description:
      "Pantallas mas finas y eficientes dado que iluminan los led de manera individual logrando asi contrastes mas perfectos",
    category: "FHD 4K",
    size: '65"',
    image:
      "https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/3/5/353117_smart_tv_65_2.jpg",
    stock: "5",
    price: "130.000",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};

export const getProductosById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((productos) => productos.id === id));
    }, 500);
  });
};

export const getProductosByCategory = (categoryId) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productos.filter(productos => productos.category === categoryId));
    }, 500)
  })
}
