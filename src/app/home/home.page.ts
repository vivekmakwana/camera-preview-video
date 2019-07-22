import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@ionic-native/camera-preview/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  
  cameraOpts: CameraPreviewOptions = {};
  picture: string;
  myElement = null;
  eleHeight = 0;
  eleWidth = 0;
  height = 0;
  width = 0;
  cameraPictureOpts: CameraPreviewPictureOptions = {
    width: window.innerWidth,
    height: window.innerHeight,
    quality: 100
  };

  constructor(
    public platform: Platform,
    private cameraPreview: CameraPreview,
  ) { }
  
  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.startCamera();
    });
  }

  async startCamera() {
    const myElement = document.getElementsByClassName('videoCamPresentation');
    this.height = myElement[0].clientHeight;
    this.width = myElement[0].clientWidth;
    // console.log('height', height, 'width', width);
    this.cameraOpts = {
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
      camera: 'rear',
      toBack: true
    };
    // this.picture = null;
    console.log(this.cameraOpts);
    const result = await this.cameraPreview.startCamera(this.cameraOpts);
    console.log(result);
  }

  async startRecording() {
    console.log('startRecording');
    const result = await this.cameraPreview.startRecording();
    console.log('result', result);
  }

  async stopRecording() {
    console.log('stopRecording');
    const result = await this.cameraPreview.stopRecording();
    console.log('result', result);
  }

}
