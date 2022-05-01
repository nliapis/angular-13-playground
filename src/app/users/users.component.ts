import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { SearchService } from '../services/search.service';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  data: string = '';

  constructor(
    private usersService: UsersService,
    private searchService: SearchService,
  ) {
  }

  async ngOnInit() {
    let initialUsers: User[] = []
    try {
      this.users = await this.usersService.fetch();
      initialUsers = [...this.users];
    } catch (error) {
      console.log(error);
    }

    this.searchService.searchValue$.subscribe(res => {
      if (res) {
        this.users = this.users.filter(user => user.familyName.toLowerCase().includes(res.toLowerCase()) || user.givenName.toLowerCase().includes(res.toLowerCase()))
      } else {
        this.users = initialUsers;
      }
    });
  }
}
