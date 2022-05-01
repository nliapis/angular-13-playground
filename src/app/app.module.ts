import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SearchComponent } from './search/search.component';
import { FilesTableComponent } from './files-table/files-table.component';
import { TypesComponent } from './types/types.component';
import { FilesComponent } from './files/files.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SearchComponent,
    TypesComponent,
    FilesComponent,
    FilesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
