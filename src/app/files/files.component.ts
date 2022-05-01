import { Component, OnInit } from '@angular/core';
import { FileWithUser } from '../models/files';
import { FilesService } from '../services/files.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  filesWithUser: FileWithUser[] = [];

  constructor(
    private filesService: FilesService,
    private searchService: SearchService,
  ) {
  }

  async ngOnInit() {
    try {
      this.filesWithUser = await this.filesService.filesWithUsers();
    } catch (error) {
      console.log(error);
    }

    this.searchService.searchValue$.subscribe(value => {
      this.filesWithUser = this.filesService.handleSearchUsers(value, this.filesWithUser);
    });
  }
}
