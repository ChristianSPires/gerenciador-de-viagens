import { Component } from '@angular/core';
import { ViagemService } from '../viagem.service';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css'],
})
export class LandPageComponent {
  imageURL: string = '/assets/resources/images/fundo.jpg';
  isHidePanel = true;

  constructor(private viagemService: ViagemService) {}

  isLoggedIn(): boolean {
    return this.viagemService.isLoggedIn();
  }

  getBackgroundImage() {
    return {
      'background-image':
        'linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.9)), url(' +
        this.imageURL +
        ')',
    };
  }
}
