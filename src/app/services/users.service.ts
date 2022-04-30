import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BaseService } from './base.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{
  constructor(private http: HttpClient) {
    super()
  }

  fetch(): Promise<User[]> {
    return firstValueFrom(this.http.get<User[]>(this.baseUrl + '/Users'));
  }
}
