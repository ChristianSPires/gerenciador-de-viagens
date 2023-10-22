import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViagemService } from '../viagem.service';

@Component({
  selector: 'app-viagem-detalhes',
  templateUrl: './viagem-detalhes.component.html',
  styleUrls: ['./viagem-detalhes.component.css']
})
export class ViagemDetalhesComponent {

  viagem: any;
  tempViagem: any;
  statusViagem: string = 'Não informado';

  constructor(private route: ActivatedRoute, private viagemService: ViagemService, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.viagem = this.viagemService.getViagemById(id);
      this.tempViagem = { ...this.viagem };
    } else {
      // Erro caso ID seja nulo
    }
  }

  salvar() {
    this.viagemService.atualizarViagem(this.viagem);
    this.getStatusButtonClass();
    this.getStatusButtonText();
    this.router.navigate(['/altera']);
  }

  cancelar() {

    this.viagem.dataInicial = this.tempViagem.dataInicial;
    this.viagem.dataFinal = this.tempViagem.dataFinal;
    this.viagem.valorPrevistoAlimentacao = null;
    this.viagem.valorGastoAlimentacao = null;
    this.viagem.valorPrevistoPassagem = null;
    this.viagem.valorGastoPassagem = null;
    this.viagem.valorPrevistoTransporte = null;
    this.viagem.valorGastoTransporte = null;
    this.viagem.valorPrevistoCompras = null;
    this.viagem.valorGastoCompras = null;

    this.router.navigate(['/altera']);
  }

  getStatusButtonClass() {
    if (!this.viagem) {
      return 'status-unknown';
    }

    const dataAtual = new Date();
    const dataInicial = new Date(this.viagem.dataInicial);
    const dataFinal = new Date(this.viagem.dataFinal);

    if (dataAtual < dataInicial) {
      return 'status-not-started';
    } else if (dataAtual >= dataInicial && dataAtual <= dataFinal) {
      return 'status-in-progress';
    } else {
      return 'status-completed';
    }
  }

  getStatusButtonText() {
    if (!this.viagem) {
      return 'Não informado';
    }

    const dataAtual = new Date();
    const dataInicial = new Date(this.viagem.dataInicial);
    const dataFinal = new Date(this.viagem.dataFinal);

    if (dataAtual < dataInicial) {
      return 'Não Iniciada';
    } else if (dataAtual >= dataInicial && dataAtual <= dataFinal) {
      return 'Em Andamento';
    } else {
      return 'Concluída';
    }
  }

  editarDataInicial() {
    this.getStatusButtonClass();
    this.getStatusButtonText();
  }

  editarDataFinal() {
    this.getStatusButtonClass();
    this.getStatusButtonText();
  }
}
