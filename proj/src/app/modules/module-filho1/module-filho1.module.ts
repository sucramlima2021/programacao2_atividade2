import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFilho1RoutingModule } from './module-filho1-routing.module';
import { ComponentFilho1Component } from './component-filho1/component-filho1.component';


@NgModule({
  declarations: [
    ComponentFilho1Component
  ],
  imports: [
    CommonModule,
    ModuleFilho1RoutingModule
  ]
})
export class ModuleFilho1Module { }
