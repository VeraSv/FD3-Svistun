
class Scales {

   scalesH:Product[];
   sumWeight:number;

    constructor() {
        this.scalesH=[]
       this.sumWeight=0;
    }

    add(product:Product):void {
        
        this.scalesH.push(product);
    }

    getSumScale():number {
      
     this.scalesH.forEach(i=>{
        this.sumWeight+=i.getScale()
        
     })
     return this.sumWeight
    }

    getNameList():string[] {
        let scale=this.scalesH.map(i=>{
            return i.getName();
        })
       return scale;
    }
}

class Product {
   weight:number;
   name:string;

   constructor(_weight:number,_name:string){
this.weight=_weight;
this.name=_name;
   }

getScale():number{
return this.weight
}

getName():string {
    return this.name
}
}

class Apple extends Product {
   constructor(_weight:number,_name:string){
       super(_weight,_name);
   }
   
    getScale():number{
      return super.getScale();
    }

    getName():string {
       return super.getName()
    }

}

class Tomato extends Product {
   
    constructor(_weight:number,_name:string){
        super(_weight,_name);
    }
    
     getScale():number{
       return super.getScale();
     }
 
     getName():string {
        return super.getName()
     }
 


}

let scales:Scales=new Scales();

let apple1:Apple=new Apple(150,'red apple')
let apple2:Apple=new Apple(50,'apple2')
let tomato1:Tomato=new Tomato(300,'tomato1')
let tomato2:Tomato=new Tomato(100,'cherry')



scales.add(apple1);
scales.add(tomato1);
scales.add(apple2);
scales.add(tomato2);
console.log(scales.getSumScale())
console.log(scales.getNameList())