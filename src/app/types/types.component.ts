import { Component, OnInit } from '@angular/core';
import { FileType, FileTypeWithFile } from '../models/type';
import { FileTypesService } from '../services/types.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  fileTypes: FileTypeWithFile[] = [];

  constructor(
    private fileTypesService: FileTypesService,
  ) {
  }

  async ngOnInit() {
    this.fileTypes = await this.fileTypesService.fileTypesWithFiles();
  }
}
