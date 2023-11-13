import { Component } from '@angular/core';
import { ViagemService } from '../viagem.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private viagemService: ViagemService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.viagemService
        .login(this.email, this.senha)
        .then((user) => {
          this.router.navigate(['/inicio']);
        })
        .catch((error) => {
          console.error('Erro ao fazer login:', error);
          alert('Credenciais inválidas. Verifique o console para detalhes.');
        });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
