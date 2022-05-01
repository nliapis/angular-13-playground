import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from '../services/users.service';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  providers: [UsersService]
})
export class UsersModule { }
