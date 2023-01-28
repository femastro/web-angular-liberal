import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './shared/container/container.component';

const routes: Routes = [
  {
    path: "",
    component: ContainerComponent,
    children:[
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'productos', loadChildren: () => import('./pages/productos/productos.module').then(m => m.ProductosModule) },
      { path: 'info', loadChildren: () => import('./pages/info/info.module').then(m => m.InfoModule) },
      { path: 'ubicacion', loadChildren: () => import('./pages/ubicacion/ubicacion.module').then(m => m.UbicacionModule) },

    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
