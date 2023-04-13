import { BolosCaseirosComponent } from './components/bolos-caseiros/bolos-caseiros.component';
import { BolosConfeitadosComponent } from './components/bolos-confeitados/bolos-confeitados.component';
import { HomeComponent } from './components/home/home.component';
import { EncomendasComponent } from './components/encomendas/encomendas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmacaoComponent } from './components/confirmacao/confirmacao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'bolosConfeitados',
    component: BolosConfeitadosComponent,
  },
  {
    path: 'bolosCaseiros',
    component: BolosCaseirosComponent,
  },
  {
    path: 'encomendas',
    component: EncomendasComponent,
  },
  {
    path: 'confirmacao',
    component: ConfirmacaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
