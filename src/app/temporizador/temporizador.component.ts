import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css'],
})
export class TemporizadorComponent {
  @Output() tempoNaPagina = new EventEmitter<void>();

  ngOnInit() {
    setTimeout(() => {
      this.tempoNaPagina.emit();
    }, 60000);
  }
}
