import { Component } from '@angular/core';
import { ImageCroppedEvent, ImageCropperModule } from 'ngx-image-cropper';
import 'hammerjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'photocropper';
  imgChangedEvent: any = "";
  cropImagePreview: any="";

  
  fileChangeEvent(event: any): void {
    this.imgChangedEvent = event;
    console.log(event);
  }
  imageCropped(event: ImageCroppedEvent) {}


    loadImageFailed() {
      alert("Image failed to load");
    }

    initCropper() {

    }
    imgLoad() {

    }
    cropImg(e: ImageCroppedEvent) {
      this.cropImagePreview = e.objectUrl; 
    }
}
