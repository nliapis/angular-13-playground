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

  ngOnInit(): void {
    fetch('http://localhost:3001/Users')
      .then(response => response.json())
      .then(data => this.users = data);
  }
}
