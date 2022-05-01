import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchValue = new Subject<string>();

  getSearchValue(): Observable<string> {
    return this.searchValue.asObservable();
  }

  setSearchValue(value: string): void {
    this.searchValue.next(value);
  }
}
