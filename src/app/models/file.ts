import { User } from "./user";

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
