import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"numword",
  pure:true,
})
export class NumwordPipe implements PipeTransform {

  transform(num:number, word1, word2,word3):string {
    var dd:number=num%100;
    if ( (dd>=11) && (dd<=19) )
        return (num+' '+word3);
    var d:number=num%10;
    if ( d==1 )
        return (num+' '+word1);
    if ( (d>=2) && (d<=4) )
        return (num+' '+word2);
    return (num+' '+word3);
  }

}