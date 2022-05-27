
import {ManagerProduct} from "./ManagerProduct";
 let listProduct = new ManagerProduct()
listProduct.add(1,"Lumia320",'Phone',200000,30,'strongger than your ex','1/6')
listProduct.add(2,"Iphone13Promax",'Phone',200000,30,'strongger than your ex','1/6')
listProduct.add(3,"Samsung Note 10",'Phone',200000,30,'What is durable','1/6')
listProduct.add(4,"Redmi Note 9",'Phone',200000,30,'redefine China','1/6')
// console.log(listProduct.searchProduct('Lumia320'));
console.log(listProduct.fixProduct('Iphone13Promax', "Iphone13Promax", 'Phone', 200000, 30, 'more expensive than your life'));
// console.log(listProduct.deleteProduct(3));
listProduct.displayListProduct()


