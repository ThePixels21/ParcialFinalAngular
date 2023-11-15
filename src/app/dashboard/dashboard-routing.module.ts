import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { validateRolGuard } from '../guards/validate-rol.guard';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProductosComponent } from './productos/productos.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { guestGuard } from '../guards/guest.guard';
import { NoAuthComponent } from './no-auth/no-auth.component';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [authGuard],
    canMatch: [validateRolGuard],
    component: HomeAdminComponent
  },
  {
    path: 'home',
    canActivate: [authGuard],
    component: HomeComponent
  },
  {
    path: 'products',
    canActivate: [authGuard],
    component: ProductosComponent
  },
  {
    path: 'hot',
    canActivate: [authGuard, guestGuard],
    component: PromocionesComponent
  },
  {
    path: 'no-auth',
    component: NoAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
