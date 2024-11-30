class Uber{
    constructor(distance,cost){
        this.distance=distance;
        this.cost=cost;
    }
    calculateprice(){
        return this.distance*this.cost;
    }
}
const price=new Uber(120,15);
console.log(price.calculateprice());