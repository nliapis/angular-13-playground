import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesRoutingModule } from './files-routing.module';
import { FilesService } from '../services/files.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FilesRoutingModule
  ],
  providers: [FilesService]
})
export class FilesModule { }
