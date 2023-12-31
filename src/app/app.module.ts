import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ImageCropperModule} from 'ngx-image-cropper';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
