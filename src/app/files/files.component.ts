import { Component, OnInit } from '@angular/core';
import { User } from '../users/users.component';

export interface File {
  creationDateTime: Date;
  status:           string;
  modifiedBy:       number;
  type:             string;
  uri:              string;
  version:          number;
  id:               string;
  fileId:           string;
  scheduled:        boolean;
  title:            string;
  createdBy:        number;
  modifiedDateTime: Date;
  live:             boolean;
  popularity:       boolean;
}

export interface FileWithUser {
  type:             string;
  createdBy:        User;
  modifiedBy:       User;
}

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  filesWithUser: FileWithUser[] = [];

  async ngOnInit() {
    const [usersResponse, filesResponse] = await Promise.all([
      fetch('http://localhost:3001/Users'),
      fetch('http://localhost:3001/Files')
    ]);
    const users: User[] = await usersResponse.json();
    const files: File[] = await filesResponse.json();

    this.filesWithUser = files.map(file => ({
      type: file.type,
      createdBy: users.find(user => user.id === file.createdBy) as User,
      modifiedBy: users.find(user => user.id === file.modifiedBy)  as User,
    }))
  }
}
