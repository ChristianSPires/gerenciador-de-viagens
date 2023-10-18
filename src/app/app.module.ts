import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { ExcluiComponent } from './exclui/exclui.component';
import { NgxMaskModule } from 'ngx-mask';


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
    ExcluiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [ViagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
