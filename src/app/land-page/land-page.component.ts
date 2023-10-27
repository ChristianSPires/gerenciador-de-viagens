import { Component } from '@angular/core';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css'],
})
export class LandPageComponent {
  imageURL: string = '/assets/resources/images/fundo.jpg';
  isHidePanel = true;
  constructor() {}

  getBackgroundImage() {
    return {
      'background-image':
        'linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.9)), url(' +
        this.imageURL +
        ')',
    };
  }
}
