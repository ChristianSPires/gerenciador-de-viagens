import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViagemService } from './viagem.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LandPageComponent } from './land-page/land-page.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { CriaComponent } from './cria/cria.component';
import { AlteraComponent } from './altera/altera.component';
import { NgxMaskModule } from 'ngx-mask';
import { ViagemDetalhesComponent } from './viagem-detalhes/viagem-detalhes.component';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EqualValidatorDirective } from './cadastro/equal-validator.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LandPageComponent,
    PesquisaComponent,
    RelatorioComponent,
    CriaComponent,
    AlteraComponent,
    ViagemDetalhesComponent,
    TemporizadorComponent,
    LoginComponent,
    CadastroComponent,
    EqualValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [ViagemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
