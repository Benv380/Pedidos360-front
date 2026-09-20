import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

import { Home } from './home/home';
import { Pedidos } from './pedidos/pedidos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pedidos', component: Pedidos, canActivate: [MsalGuard] },
];
