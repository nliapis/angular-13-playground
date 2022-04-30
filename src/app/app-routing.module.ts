import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
    {path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule)},
    {path: 'types', loadChildren: () => import('./types/types.module').then(m => m.TypesModule)},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
