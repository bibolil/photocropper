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
  imgWidth: number = 0;
  imgHeight: number = 0;
  img: any="";
  
  fileChangeEvent(event: any): void {
    this.imgChangedEvent = event;
    this.img=event.target.files[0];
    var img = new Image();
      img.src=URL.createObjectURL(event.target.files[0])
      img.onload = () => {
          this.imgWidth = img.width;
          this.imgHeight = img.height;
          console.log(this.imgHeight)

      };
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
