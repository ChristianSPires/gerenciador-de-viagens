import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViagemService {
  viagens: any[] = [];
  idCounter: number = 1;

  adicionarViagem(viagem: any) {
    viagem.id = this.generateUniqueId();
    this.viagens.push(viagem);
  }

  atualizarViagem(viagem: any) {
    const index = this.viagens.findIndex(v => v.id === viagem.id);
    if (index !== -1) {
      this.viagens[index] = viagem;
    }
  }

  getViagens() {
    return this.viagens;
  }

  getViagemById(id: string) {
    return this.viagens.find(viagem => viagem.id === id);
  }

  private generateUniqueId(): string {
    return (this.idCounter++).toString();
  }
}
