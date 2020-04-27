import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpriteComponent } from './sprite.component';
import {SpriteImgComponent} from './sprite-img.component'

@NgModule({
  declarations: [
    SpriteComponent, SpriteImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SpriteComponent]
})
export class AppModule { }
