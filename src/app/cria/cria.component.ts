import { Component } from '@angular/core';
import { ViagemService } from '../viagem.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cria',
  templateUrl: './cria.component.html',
  styleUrls: ['./cria.component.css'],
})
export class CriaComponent {
  orcamentoPrevisto: number;
  nomeViagem: string;
  dataInicialViagem: string = '';
  dataFinalViagem: string = '';

  constructor(private viagemService: ViagemService) {
    this.orcamentoPrevisto = 0;
    this.nomeViagem = '';

    const storedViagens = localStorage.getItem('viagens');
    if (storedViagens) {
      this.viagemService.viagens = JSON.parse(storedViagens);
    }
  }

  ngAfterViewInit() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

  onSelectChange(event: Event) {
    const novoOrcamento = +(event.target as HTMLSelectElement).value;
    if (novoOrcamento !== this.orcamentoPrevisto) {
      this.orcamentoPrevisto = novoOrcamento;
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.viagemService.adicionarViagem({
        nome: this.nomeViagem,
        orcamentoPrevisto: this.orcamentoPrevisto,
        dataInicial: this.dataInicialViagem,
        dataFinal: this.dataFinalViagem,
      });
      localStorage.setItem(
        'viagens',
        JSON.stringify(this.viagemService.viagens)
      );
      localStorage.setItem(
        'orcamentoPrevisto',
        this.orcamentoPrevisto.toString()
      );
      alert(
        `A viagem de nome ${this.nomeViagem} com o valor previsto de ${this.orcamentoPrevisto} foi cadastrada com sucesso`
      );
    }
  }

  handleTempoNaPagina() {
    alert(
      'Ainda está ai? Cuidado para não viajar demais e acabar esquecendo de bloquear a tela do seu computador. ;D'
    );
  }
}
