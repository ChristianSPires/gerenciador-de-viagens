import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViagemService {
  viagens: any[] = [];

  adicionarViagem(viagem: any) {
    this.viagens.push(viagem);
  }

  listarViagens() {
    return this.viagens;
  }
}
