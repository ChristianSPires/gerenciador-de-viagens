import { Component } from '@angular/core';
import { ViagemService } from '../viagem.service';

@Component({
  selector: 'app-cria',
  templateUrl: './cria.component.html',
  styleUrls: ['./cria.component.css']
})
export class CriaComponent {
  orcamentoPrevisto: number;
  nomeViagem: string;

  constructor(private viagemService: ViagemService) {
    this.orcamentoPrevisto = 0;
    this.nomeViagem = '';
  }

  ngAfterViewInit(){
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

  onSelectChange(event: Event) {
    const novoOrcamento = +(event.target as HTMLSelectElement).value;
    if (novoOrcamento !== this.orcamentoPrevisto) {
      this.orcamentoPrevisto = novoOrcamento;
    }
  }

  onButtonClick() {
    this.viagemService.adicionarViagem({
      nome: this.nomeViagem,
      orcamentoPrevisto: this.orcamentoPrevisto
    });
    alert(`A viagem de nome ${this.nomeViagem} com o valor previsto de ${this.orcamentoPrevisto} foi cadastrada com sucesso`);
  }

  onEnterKey() {
    this.onButtonClick();
  }
}
