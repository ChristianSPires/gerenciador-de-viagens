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

  getStatus(viagem: any): string {
    return this.viagemService.getStatus(viagem);
  }

  confirmarExclusao(viagem: any) {
    const confirmacao = window.confirm(`Tem certeza que deseja excluir a viagem "${viagem.nome}"?`);
    if (confirmacao) {
      this.viagemService.excluirViagem(viagem.id);
      this.viagens = this.viagemService.getViagens();
    }
  }
}
