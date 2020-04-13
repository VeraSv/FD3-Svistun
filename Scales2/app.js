var Scales = /** @class */ (function () {
    function Scales() {
        this.scalesH = [];
    }
    Scales.prototype.add = function (product) {
        this.scalesH.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var sumWeight = 0;
        this.scalesH.forEach(function (i) {
            sumWeight += i.getScale();
        });
        return sumWeight;
    };
    Scales.prototype.getNameList = function () {
        var scale = this.scalesH.map(function (i) {
            return i.getName();
        });
        return scale;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(weight, name) {
        this._weight = weight;
        this._name = name;
    }
    Apple.prototype.getScale = function () {
        return this._weight;
    };
    Apple.prototype.getName = function () {
        return this._name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(weight, name) {
        this._weight = weight;
        this._name = name;
    }
    Tomato.prototype.getScale = function () {
        return this._weight;
    };
    Tomato.prototype.getName = function () {
        return this._name;
    };
    return Tomato;
}());
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
console.log(scales.getSumScale());
console.log(scales.getNameList());
//# sourceMappingURL=app.js.map