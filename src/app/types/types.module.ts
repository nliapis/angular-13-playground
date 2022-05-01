import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesRoutingModule } from './types-routing.module';
import { FileTypesService } from '../services/types.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TypesRoutingModule
  ],
  providers: [FileTypesService]
})
export class TypesModule { }
