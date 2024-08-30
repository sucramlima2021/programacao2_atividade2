import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentFilho2Component } from './component-filho2/component-filho2.component';

const routes: Routes = [
  { path: 'filho2', component: ComponentFilho2Component }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleFilho2RoutingModule { }
