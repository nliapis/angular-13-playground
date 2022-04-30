import { FileWithUser } from "./file";

export interface FileType {
  creationDateTime: Date;
  id:               string;
  documentsCount:   number;
  description:      string;
  name:             string;
  colourId:         string;
}

export interface FileTypeWithFile {
  name: string;
  files: FileWithUser[];
}
