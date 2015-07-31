//Модель
function Shop() { //конструктор
  this.getName = function () {
    return (this.name);
  };
}

Shop.createShop = function (Data) {
  var shop = new Shop();
  shop.name = Data.name;
  return shop;
};

function Product() { //конструктор
  this.getName = function () {
    return (this.name);
  };
}

Product.createProduct = function (Data) {
  var product = new Product();
  product.name = Data.name;

  product.ownerShop = Data.ownerShop;
  return product;
};

                            //Хранилище - как его заоболочить???

function InMemoryStorage() {

  this.getName = function () {
    return (this.name);
  };

  this.setShop = function (value) {
    this.shops[String(this.IdShops())] = value; //то есть в объект shops добавили counterShops:value(value - объект shop)
  };
  // InMemoryStorage.setProduct = function (value) {
  //   this.products[String(IdProducts())] = value;
  // };

  this.getShopByName = function (name) {
    var item;
    for (item in this.shops) {
      //console.log("HERE: ", item)
      if (item.name === name) {
        return item;
      }
    }
    return null;
  };
  this.getShopById = function (id) {
    return this.shops[id]; //(value - объект shop);
  };

  this.setProduct = function (value) {
    this.product[String(this.IdProducts())] = value; //то есть в объект shops добавили counterShops:value(value - объект shop)
  };

  this.GetAllProducts = function (name) { //name - shop
    var item;
    for (item in this.product) {
      if (item.name === name) {
        return item;
      }
    }
    return null;
  }
}

//СОЗДАНИЕ

function makeId() {
  var currentCount = 1;

  // возвращаемся к функции
  function counter() {
    return currentCount++;
  }
  return counter;
}

InMemoryStorage.createStorage = function () {
  var stor = new InMemoryStorage();
  stor.shops = {};
  stor.products = {};
  stor.IdShops = makeId();
  stor.IdProducts = makeId();
  return stor;
};

  //Использование
  //создаем хранилище
var storage = InMemoryStorage.createStorage();
var shop = Shop.createShop({ name: 'Уюттера'}); //создаем магазин
storage.setShop(shop); //пихаем в хранилище магазин
storage.getShopByName('Уюттера');
storage.getShopById('1'); //вот этот доступ отвести в другое место от сюда нельзя. ну это так проверка
// // ---------------
var product = Product.createProduct({ //создаем товарик
name: 'Ваза',
ownerShop: 'Уюттера'
});

// // storage.setProduct(product); //пихаем в хранилище товар
// // storage.GetAllProducts('Уюттера');