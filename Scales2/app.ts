
class Scales {

   scalesH:IScalable[];
  
    constructor() {
        this.scalesH=[]
     }

    add(product:IScalable):void {
        
        this.scalesH.push(product);
    }

    getSumScale():number {
      let sumWeight:number=0;
     this.scalesH.forEach((i:IScalable)=>{
        sumWeight+=i.getScale()
        
     })
     return sumWeight
    }

    getNameList():string[] {
        let scale=this.scalesH.map((i:IScalable)=>{
            return i.getName();
        })
       return scale;
    }
}

interface IScalable {
  getScale():number;
  getName():string;
}

class Apple implements IScalable {
  _weight:number;
  _name:string
   constructor(weight:number,name:string){
     this._weight=weight;
     this._name=name;
   }
   
    getScale():number{
      return this._weight;
    }

    getName():string {
       return this._name
    }

}

class Tomato implements IScalable {
   
  _weight:number;
  _name:string
  constructor(weight:number,name:string){
    this._weight=weight;
    this._name=name;
  }
   
    getScale():number{
      return this._weight;
    }

    getName():string {
       return this._name
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
console.log(scales.getSumScale())
console.log(scales.getNameList())