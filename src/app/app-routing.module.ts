import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { CriaComponent } from './cria/cria.component';
import { AlteraComponent } from './altera/altera.component';
import { ExcluiComponent } from './exclui/exclui.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

const routes: Routes = [
  { path: 'inicio', component: LandPageComponent },
  { path: 'cria', component: CriaComponent },
  { path: 'altera', component: AlteraComponent },
  { path: 'exclui', component: ExcluiComponent },
  { path: 'pesquisa', component: PesquisaComponent},
  { path: 'relatorio', component: RelatorioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
