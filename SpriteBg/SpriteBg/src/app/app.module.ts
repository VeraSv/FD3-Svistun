import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpriteComponent } from './sprite.component';
import {SpritebgDirective} from './sprite-bg.attr.directive'

@NgModule({
  declarations: [
    SpriteComponent, SpritebgDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SpriteComponent]
})
export class AppModule { }
