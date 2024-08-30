import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentFilho1Component } from './component-filho1/component-filho1.component';

const routes: Routes = [
  { path: 'filho1', component: ComponentFilho1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleFilho1RoutingModule { }
