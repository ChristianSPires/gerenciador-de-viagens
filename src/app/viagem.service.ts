import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViagemService {
  viagens: any[] = [];
  idCounter: number = 1;

  adicionarViagem(viagem: any) {
    viagem.id = this.generateUniqueId();
    viagem.valorTotalPrevisto = 0;
    viagem.valorTotalGasto = 0;
    this.viagens.push(viagem);
  }

  atualizarViagem(viagem: any) {
    const index = this.viagens.findIndex((v) => v.id === viagem.id);
    if (index !== -1) {
      this.viagens[index] = viagem;
      this.calcularValoresTotais(viagem);
    }
  }

  excluirViagem(id: string) {
    const index = this.viagens.findIndex((viagem) => viagem.id === id);
    if (index !== -1) {
      this.viagens.splice(index, 1);
      localStorage.setItem('viagens', JSON.stringify(this.viagens));
    }
  }

  getViagens() {
    return this.viagens;
  }

  getViagemById(id: string) {
    return this.viagens.find((viagem) => viagem.id === id);
  }

  private generateUniqueId(): string {
    return (this.idCounter++).toString();
  }

  private calcularValoresTotais(viagem: any) {
    viagem.valorTotalPrevisto =
      (viagem.valorPrevistoAlimentacao || 0) +
      (viagem.valorPrevistoPassagem || 0) +
      (viagem.valorPrevistoTransporte || 0) +
      (viagem.valorPrevistoCompras || 0);

    viagem.valorTotalGasto =
      (viagem.valorGastoAlimentacao || 0) +
      (viagem.valorGastoPassagem || 0) +
      (viagem.valorGastoTransporte || 0) +
      (viagem.valorGastoCompras || 0);
  }

  getStatus(viagem: any): string {
    if (!viagem) {
      return 'Não informado';
    }

    const dataAtual = new Date();
    const dataInicial = new Date(viagem.dataInicial);
    const dataFinal = new Date(viagem.dataFinal);

    if (dataAtual < dataInicial) {
      return 'Não Iniciada';
    } else if (dataAtual >= dataInicial && dataAtual <= dataFinal) {
      return 'Em Andamento';
    } else {
      return 'Concluída';
    }
  }
}
