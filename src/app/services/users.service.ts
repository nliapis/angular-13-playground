import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BaseService } from './base.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService {
  data: User[] = [];
  constructor(private http: HttpClient) {
    super();
  }

  async fetch(): Promise<User[]> {
    this.data = await firstValueFrom(this.http.get<User[]>(this.baseUrl + '/Users'));
    return this.data;
  }

  handleSearch(value: string, users: User[]) {
    if (!value) {
      return this.data;
    }

    return users.filter(user => user.familyName.toLowerCase().includes(value.toLowerCase()) || user.givenName.toLowerCase().includes(value.toLowerCase()))
  }
}
