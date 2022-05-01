import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File, FileWithUser } from '../models/files';
import { User } from '../models/user';
import { BaseService } from './base.service';
import { firstValueFrom } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class FilesService extends BaseService {
  data: FileWithUser[] = [];

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

    this.data = files.map(file => ({
      type: file.type,
      createdBy: users.find(user => user.id === file.createdBy) as User,
      modifiedBy: users.find(user => user.id === file.modifiedBy)  as User,
    }));

    return this.data;
  }

  handleSearchUsers(value: string, files: FileWithUser[]) {
    if (!value) {
      return this.data;
    }

    return files.filter(file =>
      file.createdBy.familyName.toLowerCase().includes(value.toLowerCase()) ||
      file.createdBy.givenName.toLowerCase().includes(value.toLowerCase()) ||
      file.modifiedBy.givenName.toLowerCase().includes(value.toLowerCase()) ||
      file.modifiedBy.givenName.toLowerCase().includes(value.toLowerCase())
    );
  }
}
