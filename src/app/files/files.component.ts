import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileWithUser } from '../models/files';
import { FilesService } from '../services/files.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html'
})
export class FilesComponent implements OnInit, OnDestroy {
  filesWithUser: FileWithUser[] = [];
  subscription!: Subscription;

  constructor(
    private filesService: FilesService,
    private searchService: SearchService,
  ) {
    this.subscription = this.searchService.getSearchValue().subscribe(value => {
      this.filesWithUser = this.filesService.handleSearchUsers(value, this.filesWithUser);
    });
  }

  async ngOnInit() {
    try {
      this.filesWithUser = await this.filesService.filesWithUsers();
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
