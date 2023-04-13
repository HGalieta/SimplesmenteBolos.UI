import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EncomendasComponent } from './components/encomendas/encomendas.component';
import { HomeComponent } from './components/home/home.component';
import { BolosConfeitadosComponent } from './components/bolos-confeitados/bolos-confeitados.component';
import { BolosCaseirosComponent } from './components/bolos-caseiros/bolos-caseiros.component';
import { ItemPedidoComponent } from './components/item-pedido/item-pedido.component';
import { FormsModule } from '@angular/forms';
import { ConfirmacaoComponent } from './components/confirmacao/confirmacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EncomendasComponent,
    HomeComponent,
    BolosConfeitadosComponent,
    BolosCaseirosComponent,
    ItemPedidoComponent,
    ConfirmacaoComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
