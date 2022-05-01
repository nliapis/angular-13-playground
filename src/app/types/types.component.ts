import { Component, OnInit } from '@angular/core';
import { FileType, FileTypeWithFile } from '../models/type';
import { SearchService } from '../services/search.service';
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
    private searchService: SearchService,
  ) {
  }

  async ngOnInit() {
    try {
      this.fileTypes = await this.fileTypesService.fileTypesWithFiles();
    } catch (error) {
      console.log(error);
    }

    this.searchService.searchValue$.subscribe(value => {
      this.fileTypes = this.fileTypesService.handleSearch(value, this.fileTypes);
    });
  }
}
