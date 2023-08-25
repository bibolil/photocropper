import { Component } from '@angular/core';
import {ImageCropperModule} from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photocropper';
  imgChangedEvent: any = '';
  fileChangeEvent(event: any): void {
    this.imgChangedEvent = event;
  }
}
