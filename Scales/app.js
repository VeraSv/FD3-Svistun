var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.scalesH = [];
        this.sumWeight = 0;
    }
    Scales.prototype.add = function (product) {
        this.scalesH.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var _this = this;
        this.scalesH.forEach(function (i) {
            _this.sumWeight += i.getScale();
        });
        return this.sumWeight;
    };
    Scales.prototype.getNameList = function () {
        var scale = this.scalesH.map(function (i) {
            return i.getName();
        });
        return scale;
    };
    return Scales;
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
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_weight, _name) {
        return _super.call(this, _weight, _name) || this;
    }
    Apple.prototype.getScale = function () {
        return _super.prototype.getScale.call(this);
    };
    Apple.prototype.getName = function () {
        return _super.prototype.getName.call(this);
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_weight, _name) {
        return _super.call(this, _weight, _name) || this;
    }
    Tomato.prototype.getScale = function () {
        return _super.prototype.getScale.call(this);
    };
    Tomato.prototype.getName = function () {
        return _super.prototype.getName.call(this);
    };
    return Tomato;
}(Product));
var scales = new Scales();
var apple1 = new Apple(150, 'red apple');
var apple2 = new Apple(50, 'apple2');
var tomato1 = new Tomato(300, 'tomato1');
var tomato2 = new Tomato(100, 'cherry');
scales.add(apple1);
scales.add(tomato1);
scales.add(apple2);
scales.add(tomato2);
console.log(scales.getSumScale());
console.log(scales.getNameList());
//# sourceMappingURL=app.js.map