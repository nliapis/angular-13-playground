import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File, FileWithUser } from '../models/file';
import { User } from '../models/user';
import { BaseService } from './base.service';
import { firstValueFrom } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class FilesService extends BaseService{
  constructor(private http: HttpClient, private usersService: UsersService) {
    super()
  }

  fetch(): Promise<File[]> {
    return firstValueFrom(this.http.get<File[]>(this.baseUrl + '/Files'));
  }

  async filesWithUsers(): Promise<FileWithUser[]> {
    const [users, files] = await Promise.all([
      this.usersService.fetch(),
      this.fetch(),
    ]);

    return files.map(file => ({
      type: file.type,
      createdBy: users.find(user => user.id === file.createdBy) as User,
      modifiedBy: users.find(user => user.id === file.modifiedBy)  as User,
    }))
  }
}
