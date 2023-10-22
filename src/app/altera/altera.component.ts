import { Component, OnInit } from '@angular/core';
import { ViagemService } from '../viagem.service';

@Component({
  selector: 'app-altera',
  templateUrl: './altera.component.html',
  styleUrls: ['./altera.component.css']
})
export class AlteraComponent implements OnInit {
  viagens: any[] = [];

  constructor(private viagemService: ViagemService) {}

  ngOnInit() {
    this.viagens = this.viagemService.getViagens();
  }
}
