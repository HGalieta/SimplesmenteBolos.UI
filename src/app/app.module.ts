import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EncomendasComponent } from './components/encomendas/encomendas.component';
import { HomeComponent } from './components/home/home.component';
import { BolosConfeitadosComponent } from './components/bolos-confeitados/bolos-confeitados.component';
import { BolosCaseirosComponent } from './components/bolos-caseiros/bolos-caseiros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EncomendasComponent,
    HomeComponent,
    BolosConfeitadosComponent,
    BolosCaseirosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
