import {Product} from "./Product";
export class ManagerProduct {
    managerProduct:Product[]=[]
    constructor() {
    }
    add(id,name,type,price,amount,describe,date){
        let product = new Product(id,name,type,price,amount,describe,date);
        this.managerProduct.push(product)
    }
    searchProductbyName(name:string){
        for (let i = 0; i < this.managerProduct.length; i++) {
            if(name===this.managerProduct[i].name){
                return this.managerProduct[i]
            }
        }
    }
    displayListProduct(){
        let display = []
        // display.push('name','type')
        for (let i = 0; i < this.managerProduct.length; i++) {
            display.push(this.managerProduct[i].name+this.managerProduct[i].type)
        }
        console.table(display)
    }
    fixProduct(searchName,name:string,type:string,price:number,amount:number,describe){
      let productNeedFIx =  this.searchProductbyName(searchName)
        productNeedFIx.setName(name)
        productNeedFIx.setType(type)
        productNeedFIx.setPrice(price)
        productNeedFIx.setAmount(amount)
        productNeedFIx.setDescribe(describe)
        return productNeedFIx
    }
    deleteProduct(id){
        for (let i = 0; i < this.managerProduct.length; i++) {
            if(id === this.managerProduct[i].id){
                this.managerProduct.splice(i,1)
                console.log(`da xoa ${id}`)
            }
        }
        return this.managerProduct
    }
}