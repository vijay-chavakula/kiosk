import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
  
import { FlexLayoutModule } from '@angular/flex-layout'; 


import { MatButtonModule, MatCardModule, MatFormFieldModule, MatAutocompleteModule, MatToolbarModule,
          MatIconModule, MatMenuModule, MatInputModule, MatDividerModule, MatGridListModule, MatCheckboxModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';

import {Routes, RouterModule } from '@angular/router'; 
import { componentFactoryName } from '@angular/compiler';
import { ShelfComponent } from './shelf/shelf.component';


const bdaRoutes: Routes = [
  {
    path: '', component: ShelfComponent
  },
  {
    path: 'shelf', component: ShelfComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShelfComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatGridListModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(bdaRoutes),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
