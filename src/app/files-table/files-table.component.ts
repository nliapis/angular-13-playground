import { Component, Input, OnInit } from '@angular/core';
import { FileWithUser } from '../models/files';

@Component({
  selector: 'app-files-table',
  templateUrl: './files-table.component.html'
})
export class FilesTableComponent {
  @Input() files: FileWithUser[] = [];
}
