var Scales = /** @class */ (function () {
    function Scales(_StorageEngine) {
        this.scalesH = _StorageEngine;
    }
    Scales.prototype.add = function (product) {
        this.scalesH.addItem(product);
    };
    Scales.prototype.getSumScale = function () {
        var sumWeight = 0;
        for (var i = 0; i < this.scalesH.getCount(); i++) {
            sumWeight += this.scalesH.getItem(i).getScale();
        }
        return sumWeight;
    };
    Scales.prototype.getNameList = function () {
        var list = [];
        for (var i = 0; i < this.scalesH.getCount(); i++) {
            list.push(this.scalesH.getItem(i).getName());
        }
        return list;
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.items[index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.items.length;
    };
    ;
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.locKey = 'prod';
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var prodH = [];
        if (!localStorage.prod)
            localStorage.prod = [];
        if (localStorage.prod)
            prodH = JSON.parse(localStorage.prod);
        prodH.push(item);
        localStorage.prod = JSON.stringify(prodH);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var prodH = JSON.parse(localStorage.prod);
        return new Product(prodH[index].weight, prodH[index].name);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var prodH = JSON.parse(localStorage.prod);
        return prodH.length;
    };
    ;
    return ScalesStorageEngineLocalStorage;
}());
var Product = /** @class */ (function () {
    function Product(_weight, _name) {
        this.weight = _weight;
        this.name = _name;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var storageArray = new ScalesStorageEngineArray();
var localStorageArray = new ScalesStorageEngineLocalStorage();
var scalesArray = new Scales(storageArray);
var localScalesArray = new Scales(localStorageArray);
var apple1 = new Product(150, 'red apple');
var apple2 = new Product(50, 'apple2');
var tomato1 = new Product(300, 'tomato1');
var tomato2 = new Product(100, 'cherry');
storageArray.addItem(apple1);
storageArray.addItem(tomato1);
localStorageArray.addItem(apple2);
localStorageArray.addItem(tomato2);
console.log(scalesArray.getSumScale());
console.log(localScalesArray.getSumScale());
console.log(scalesArray.getNameList());
console.log(localScalesArray.getNameList());
//# sourceMappingURL=app.js.map