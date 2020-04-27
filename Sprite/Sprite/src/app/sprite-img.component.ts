import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  
  selector: 'sprite-img',
  templateUrl: './sprite-img.component.html',
  
})
export class SpriteImgComponent {

    @Input("url")
   public imgUrl:string;
   
    @Input("width")
    public imgWidth:number;
  
    @Input("height")
    public imgHeight:number;
   
    @Input("offset-x")
    public imgOffsetX:number;

    @Input("offset-y")
    public imgOffsetY:number;

    @Output("clickedCard")
  private clickedCardEE=new EventEmitter<number>();

 clicked():void {
    this.clickedCardEE.emit();
  }
  
}