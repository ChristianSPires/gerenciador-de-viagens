import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViagemService } from '../viagem.service';

@Component({
  selector: 'app-viagem-detalhes',
  templateUrl: './viagem-detalhes.component.html',
  styleUrls: ['./viagem-detalhes.component.css'],
})
export class ViagemDetalhesComponent {
  viagem: any;
  tempViagem: any;
  statusViagem: string = 'Não informado';

  constructor(
    private route: ActivatedRoute,
    private viagemService: ViagemService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.viagem = this.viagemService.getViagemById(id);
      this.tempViagem = JSON.parse(JSON.stringify(this.viagem));
    } else {
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
    this.viagem.valorPrevistoAlimentacao =
      this.tempViagem.valorPrevistoAlimentacao;
    this.viagem.valorGastoAlimentacao = this.tempViagem.valorGastoAlimentacao;
    this.viagem.valorPrevistoPassagem = this.tempViagem.valorPrevistoPassagem;
    this.viagem.valorGastoPassagem = this.tempViagem.valorGastoPassagem;
    this.viagem.valorPrevistoTransporte =
      this.tempViagem.valorPrevistoTransporte;
    this.viagem.valorGastoTransporte = this.tempViagem.valorGastoTransporte;
    this.viagem.valorPrevistoCompras = this.tempViagem.valorPrevistoCompras;
    this.viagem.valorGastoCompras = this.tempViagem.valorGastoCompras;

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

  calcularTotalPrevisto() {
    let total = 0;
    total += this.viagem.valorPrevistoAlimentacao || 0;
    total += this.viagem.valorPrevistoPassagem || 0;
    total += this.viagem.valorPrevistoTransporte || 0;
    total += this.viagem.valorPrevistoCompras || 0;
    return total;
  }

  calcularTotalGasto() {
    let total = 0;
    total += this.viagem.valorGastoAlimentacao || 0;
    total += this.viagem.valorGastoPassagem || 0;
    total += this.viagem.valorGastoTransporte || 0;
    total += this.viagem.valorGastoCompras || 0;
    return total;
  }
}
