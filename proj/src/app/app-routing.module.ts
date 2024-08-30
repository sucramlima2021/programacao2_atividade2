import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'modulo1', loadChildren: () => import('./modules/module-filho1/module-filho1.module').then(m => m.ModuleFilho1Module) },
  { path: 'modulo2', loadChildren: () => import('./modules/module-filho2/module-filho2.module').then(m => m.ModuleFilho2Module) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
