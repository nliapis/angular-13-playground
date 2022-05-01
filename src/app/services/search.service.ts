import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchValue = new Subject<string>();
  searchValue$ = this.searchValue.asObservable();

  public setSearchValue(value: string): void {
    this.searchValue.next(value);
  }
}
