import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFilho2RoutingModule } from './module-filho2-routing.module';
import { ComponentFilho2Component } from './component-filho2/component-filho2.component';


@NgModule({
  declarations: [
    ComponentFilho2Component
  ],
  imports: [
    CommonModule,
    ModuleFilho2RoutingModule
  ]
})
export class ModuleFilho2Module { }
