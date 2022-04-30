import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from '../files/files.component';
import { FilesRoutingModule } from './files-routing.module';
import { FilesService } from '../services/files.service';

@NgModule({
  declarations: [
    FilesComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule
  ],
  providers: [FilesService]
})
export class FilesModule { }
