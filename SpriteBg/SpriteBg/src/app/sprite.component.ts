import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './sprite.component.html',
  
})
export class SpriteComponent {
  
  private url:string='http://fe.it-academy.by/Examples/cards2.png';
  private width:number=143.5;
  private height:number=193.7;
  private offsetX:number=0;
  private offsetY:number=0;

  getUrl():string {
    return this.url;
  }

  getWidth():number {
    return this.width;
  }

  getHeight():number {
    return this.height
  }
 getOffsetX():number {
   return this.offsetX
 }

 getOffsetY():number {
  return this.offsetY;
 }
  changeCard():void {
    this.offsetX += this.width;
    this.offsetY -= this.height;
  }



  
}
