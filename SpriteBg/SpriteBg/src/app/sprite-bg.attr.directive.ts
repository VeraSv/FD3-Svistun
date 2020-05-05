import { Directive, ElementRef, Input, Attribute, HostListener,AfterViewInit} from "@angular/core"; 

@Directive({ 
  selector: "[sprite-bg]", 
}) 
export class SpritebgDirective { 
 private offsetX:string;
 private offsetY:string;
 private width:string;
 private height:string;

  constructor(private element: ElementRef, 
    @Attribute("sprite-url") url: string, @Attribute("sprite-width") width:string, @Attribute("sprite-height") height:string, @Attribute("sprite-offset-x") offsetX:string, @Attribute("sprite-offset-y") offsetY:string) {
      if(url && offsetY && offsetX && width && height){
      this.element.nativeElement
      .style.background='url('+url+')';
      this.width=width;
      this.height=height;
      this.offsetX=offsetX;
      this.offsetY=offsetY;
      }
      else  this.element.nativeElement.textContent=":)";
  }

  ngAfterViewInit():void {
    this.element.nativeElement
    .style.backgroundPositionX=this.offsetX+'px';
    this.element.nativeElement
    .style.backgroundPositionY=this.offsetY+'px';
    this.element.nativeElement
    .style.width=this.width+'px';
    this.element.nativeElement
    .style.height=this.height+'px';
  }
    
  } 

  






