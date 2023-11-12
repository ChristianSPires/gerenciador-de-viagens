import { Component } from '@angular/core';
import { ViagemService } from '../viagem.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent {
  gastoTotal: number = 0;

  constructor(private viagemService: ViagemService) {}

  ngOnInit() {
    this.viagemService.calcularGastoTotal().subscribe((total) => {
      this.gastoTotal = total;
    });
  }
}
