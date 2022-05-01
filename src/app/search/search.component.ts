import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  constructor(
    private searchService: SearchService,
  ) { }

  handleSearch(event: any) {
    this.searchService.setSearchValue(event.target.value);
  }
}
