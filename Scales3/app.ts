interface IStorageEngine {
  addItem(item:Product):void;
  getItem(index:number):Product;
  getCount():number;
}

class Scales<StorageEngine extends IStorageEngine> {

  scalesH:StorageEngine;
  
  constructor(_StorageEngine:StorageEngine) {
    this.scalesH=_StorageEngine;
  }

  add(product:Product):void {
    this.scalesH.addItem(product);
  }

  getSumScale():number {
    let sumWeight:number=0;
    for(let i:number=0; i<this.scalesH.getCount(); i++){
      sumWeight+=this.scalesH.getItem(i).getScale()
    }
    return sumWeight
  }

  getNameList():string[] {
    let list:string[]=[];
    for(let i:number=0; i<this.scalesH.getCount(); i++){
      list.push(this.scalesH.getItem(i).getName())
    }
    return list;
  }
}

class ScalesStorageEngineArray implements IStorageEngine {
  items:Product[]=[];
  addItem(item:Product):void {
    this.items.push(item)
  };

  getItem(index:number):Product {
    return this.items[index]
  };

  getCount():number {
    return this.items.length
  };
}

class ScalesStorageEngineLocalStorage implements IStorageEngine{
  
 

  addItem(item:Product):void {
    
    let prodH:any[]=[];
    if(!localStorage.prod) localStorage.prod=[]; 
    else prodH=JSON.parse(localStorage.prod);
    prodH.push(item);
    localStorage.prod=JSON.stringify(prodH);
  };

 getItem(index:number):Product {
  let prodH:any[]=[];
    prodH=JSON.parse(localStorage.prod);
    return new Product(prodH[index].weight, prodH[index].name)
  };

 getCount():number {
  let prodH:any[]=[];
   prodH=JSON.parse(localStorage.prod);
   return prodH.length;
 };
}

class Product {
  private weight:number;
  private name:string;

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

let storageArray= new ScalesStorageEngineArray();
let localStorageArray=new ScalesStorageEngineLocalStorage()
let scalesArray=new Scales<ScalesStorageEngineArray>(storageArray);
let localScalesArray= new Scales<ScalesStorageEngineLocalStorage>(localStorageArray);

let apple1:Product=new Product(150,'red apple')
let apple2:Product=new Product(50,'apple2')
let tomato1:Product=new Product(300,'tomato1')
let tomato2:Product=new Product(100,'cherry')

storageArray.addItem(apple1);
storageArray.addItem(tomato1);
localStorageArray.addItem(apple2);
localStorageArray.addItem(tomato2);
console.log(scalesArray.getSumScale())
console.log(localScalesArray.getSumScale())
console.log(scalesArray.getNameList());
console.log(localScalesArray.getNameList());