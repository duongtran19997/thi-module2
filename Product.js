"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, type, price, amount, describe, date) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._describe = describe;
        this._date = date;
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.setId = function (value) {
        this._id = value;
    };
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.setName = function (value) {
        this._name = value;
    };
    Object.defineProperty(Product.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.setType = function (value) {
        this._type = value;
    };
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.setPrice = function (value) {
        this._price = value;
    };
    Object.defineProperty(Product.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.setAmount = function (value) {
        this._amount = value;
    };
    Object.defineProperty(Product.prototype, "describe", {
        get: function () {
            return this._describe;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.setDescribe = function (value) {
        this._describe = value;
    };
    Object.defineProperty(Product.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.setDate = function (value) {
        this._date = value;
    };
    return Product;
}());
exports.Product = Product;
