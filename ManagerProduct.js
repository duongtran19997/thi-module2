"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerProduct = void 0;
var Product_1 = require("./Product");
var ManagerProduct = /** @class */ (function () {
    function ManagerProduct() {
        this.managerProduct = [];
    }
    ManagerProduct.prototype.add = function (id, name, type, price, amount, describe, date) {
        var product = new Product_1.Product(id, name, type, price, amount, describe, date);
        this.managerProduct.push(product);
    };
    ManagerProduct.prototype.searchProductbyName = function (name) {
        for (var i = 0; i < this.managerProduct.length; i++) {
            if (name === this.managerProduct[i].name) {
                return this.managerProduct[i];
            }
        }
    };
    ManagerProduct.prototype.displayListProduct = function () {
        var display = [];
        // display.push('name','type')
        for (var i = 0; i < this.managerProduct.length; i++) {
            display.push(this.managerProduct[i].name + this.managerProduct[i].type);
        }
        console.table(display);
    };
    ManagerProduct.prototype.fixProduct = function (searchName, name, type, price, amount, describe) {
        var productNeedFIx = this.searchProductbyName(searchName);
        productNeedFIx.setName(name);
        productNeedFIx.setType(type);
        productNeedFIx.setPrice(price);
        productNeedFIx.setAmount(amount);
        productNeedFIx.setDescribe(describe);
        return productNeedFIx;
    };
    ManagerProduct.prototype.deleteProduct = function (id) {
        for (var i = 0; i < this.managerProduct.length; i++) {
            if (id === this.managerProduct[i].id) {
                this.managerProduct.splice(i, 1);
                console.log("da xoa ".concat(id));
            }
        }
        return this.managerProduct;
    };
    return ManagerProduct;
}());
exports.ManagerProduct = ManagerProduct;
