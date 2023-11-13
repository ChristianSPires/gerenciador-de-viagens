import { Component } from '@angular/core';
import { ViagemService } from '../viagem.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  nomeUsuario: string = '';
  email: string = '';
  telefone: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor(private viagemService: ViagemService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.senha !== this.confirmarSenha) {
        alert('As senhas não coincidem. Por favor, verifique.');
        return;
      }

      const usuario = {
        nome: this.nomeUsuario,
        email: this.email,
        telefone: this.telefone,
        senha: this.senha,
      };

      this.viagemService
        .cadastrarUsuario(usuario)
        .then(() => {
          this.nomeUsuario = '';
          this.email = '';
          this.telefone = '';
          this.senha = '';
          this.confirmarSenha = '';

          alert('Usuário cadastrado com sucesso!');
          this.router.navigate(['/login']);
        })
        .catch((error) => {
          console.error('Erro ao cadastrar usuário:', error);
          alert(
            'Erro ao cadastrar usuário. Verifique o console para detalhes.'
          );
        });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
