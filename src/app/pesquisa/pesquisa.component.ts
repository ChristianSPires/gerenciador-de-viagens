import { Component } from '@angular/core';
import { ViagemService } from '../viagem.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
})
export class PesquisaComponent {
  resultadosPesquisa: any[] = [];
  tipoFiltroSelecionado: string = 'nome';
  termoPesquisa: string = '';
  dadosOriginais: any[] = [];

  constructor(private viagemService: ViagemService) {
    this.dadosOriginais = this.viagemService.getViagens();
    this.resultadosPesquisa = this.dadosOriginais;
  }

  executarPesquisa() {
    const termoPesquisa = this.termoPesquisa.toLowerCase();

    if (termoPesquisa) {
      this.resultadosPesquisa = this.dadosOriginais.filter((item) =>
        item[this.tipoFiltroSelecionado].toLowerCase().includes(termoPesquisa)
      );
    } else {
      this.resultadosPesquisa = this.dadosOriginais;
    }
  }

  getStatus(viagem: any): string {
    return this.viagemService.getStatus(viagem);
  }
}
