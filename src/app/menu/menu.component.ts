import { Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
import { ViagemService } from '../viagem.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @ViewChild('mobile') sideNav?: ElementRef;

  constructor(private viagemService: ViagemService) {}

  isLoggedIn(): boolean {
    return this.viagemService.isLoggedIn();
  }

  logout() {
    this.viagemService.logout();
  }

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

  public toggle() {
    document.body.classList.toggle('dark-theme');
  }
}
