import { Injectable } from '@angular/core';

interface Usuario {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
}

@Injectable({
  providedIn: 'root',
})
export class ViagemService {
  viagens: any[] = [];
  usuarios: any[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
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

  cadastrarUsuario(usuario: Usuario): Promise<Usuario> {
    return fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro ao cadastrar usuário');
        }
      })
      .then((usuarioCadastrado) => {
        return usuarioCadastrado;
      });
  }

  login(email: string, senha: string): Promise<Usuario> {
    return fetch('http://localhost:3000/usuarios')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro ao buscar usuários');
        }
      })
      .then((usuarios: Usuario[]) => {
        const user = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha);
        if (user) {
          localStorage.setItem('loggedUser', JSON.stringify(user));
          return user;
        } else {
          throw new Error('Credenciais inválidas');
        }
      });
  }


  isLoggedIn(): boolean {
    const user = localStorage.getItem('loggedUser');
    return user !== null;
  }

  logout(): void {
    localStorage.removeItem('loggedUser');
  }
}
