import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { firstValueFrom } from 'rxjs';
import { FileType, FileTypeWithFile } from '../models/type';
import { FilesService } from './files.service';

@Injectable({
  providedIn: 'root'
})
export class FileTypesService extends BaseService{
  constructor(
    private http: HttpClient,
    private filesService: FilesService,
  ) {
    super()
  }

  fetch(): Promise<FileType[]> {
    return firstValueFrom(this.http.get<FileType[]>(this.baseUrl + '/Types'));
  }

  async fileTypesWithFiles(): Promise<FileTypeWithFile[]> {
    const [files, types] = await Promise.all([
      this.filesService.filesWithUsers(),
      this.fetch(),
    ]);

    return types.map(type => ({
      name: type.name,
      files: files.map(file => file.type === type.id ? file : null).filter(item => item)
    })) as FileTypeWithFile[];
  }

}
