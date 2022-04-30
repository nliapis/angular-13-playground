import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesComponent } from '../types/types.component';
import { TypesRoutingModule } from './types-routing.module';



@NgModule({
  declarations: [
    TypesComponent
  ],
  imports: [
    CommonModule,
    TypesRoutingModule
  ]
})
export class TypesModule { }
