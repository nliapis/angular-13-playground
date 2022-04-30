import { Component, OnInit } from '@angular/core';

export interface User {
  id: number;
  givenName: string;
  familyName: string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  async ngOnInit() {
    const usersResponse = await fetch('http://localhost:3001/Users');
    this.users = await usersResponse.json();
  }
}
