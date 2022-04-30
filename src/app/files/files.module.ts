import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from '../files/files.component';
import { FilesRoutingModule } from './files-routing.module';

@NgModule({
  declarations: [
    FilesComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule
  ]
})
export class FilesModule { }
