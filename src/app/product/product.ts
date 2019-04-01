export class Product {

    name: string;
    price: number;
    tag : string;
    imageUrl: String;
    departement:string[];


    constructor(name: string, price: number, tag: string, imageurl:string, departement:string[]){
        this.name=name;
        this.price=price;
        this.tag=tag;
        this.imageUrl=imageurl;
        this.departement=departement;
    }

    
}
