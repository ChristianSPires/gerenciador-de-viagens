import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { CriaComponent } from './cria/cria.component';
import { AlteraComponent } from './altera/altera.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { ViagemDetalhesComponent } from './viagem-detalhes/viagem-detalhes.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: 'inicio', component: LandPageComponent },
  { path: 'cria', component: CriaComponent },
  { path: '', component: LandPageComponent },
  { path: 'altera', component: AlteraComponent },
  { path: 'viagem/:id', component: ViagemDetalhesComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'relatorio', component: RelatorioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
