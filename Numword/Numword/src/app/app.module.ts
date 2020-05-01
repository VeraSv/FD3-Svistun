import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NumwordPipe } from './numword.pipe';
import { ExampleComponent } from './example.component';

@NgModule({
  declarations: [
    ExampleComponent,
    NumwordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ExampleComponent]
})
export class AppModule { }
