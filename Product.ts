export class Product{
    private _id:number
    private _name:string
    private _type:string
    private _price:number
    private _amount:number
    private _describe:string
    private _date:string


    constructor(id:number,name: string, type: string, price: number, amount: number, describe: string, date: string) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._describe = describe;
        this._date = date;
    }
    get id():number {
        return  this._id
    }
    setId(value: number) {
        this._id = value;
    }
    get name(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    setType(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    setPrice(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    setAmount(value: number) {
        this._amount = value;
    }

    get describe(): string {
        return this._describe;
    }

    setDescribe(value: string) {
        this._describe = value;
    }

    get date(): string {
        return this._date;
    }

    setDate(value: string) {
        this._date = value;
    }
}