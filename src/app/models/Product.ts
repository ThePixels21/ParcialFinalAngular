export class Product{
    name: string;
    price: number;
    description: string;
    imgUrl: string;
    promo: number = 0

    constructor(name: string, price: number, description: string, imgUrl: string){
        this.name = name
        this.price = price
        this.description = description
        this.imgUrl = imgUrl
    }
}