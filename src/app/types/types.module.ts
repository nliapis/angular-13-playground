import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesComponent } from '../types/types.component';
import { TypesRoutingModule } from './types-routing.module';
import { FileTypesService } from '../services/types.service';

@NgModule({
  declarations: [
    TypesComponent
  ],
  imports: [
    CommonModule,
    TypesRoutingModule
  ],
  providers: [FileTypesService]
})
export class TypesModule { }
