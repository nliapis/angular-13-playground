import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FileType, FileTypeWithFile } from '../models/type';
import { SearchService } from '../services/search.service';
import { FileTypesService } from '../services/types.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html'
})
export class TypesComponent implements OnInit, OnDestroy {
  fileTypes: FileTypeWithFile[] = [];
  subscription!: Subscription;

  constructor(
    private fileTypesService: FileTypesService,
    private searchService: SearchService,
  ) {
    this.subscription = this.searchService.getSearchValue().subscribe(value => {
      this.fileTypes = this.fileTypesService.handleSearch(value, this.fileTypes);
    });
  }

  async ngOnInit() {
    try {
      this.fileTypes = await this.fileTypesService.fileTypesWithFiles();
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
