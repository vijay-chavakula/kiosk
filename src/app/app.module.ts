import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
  
import { FlexLayoutModule } from '@angular/flex-layout'; 
 


import { MatButtonModule, MatCardModule, MatFormFieldModule, MatAutocompleteModule, MatToolbarModule,
          MatIconModule, MatMenuModule, MatInputModule, MatDividerModule, MatGridListModule, MatCheckboxModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';

import {Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { componentFactoryName } from '@angular/compiler';
import { SelfLoginComponent } from './self-login/self-login.component';
import { ConfirmationScreenComponent } from './confirmation-screen/confirmation-screen.component';
import { ShelfComponent } from './shelf/shelf.component';


const bdaRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },

  {
    path: 'home', component: HomeComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'self-login', component: SelfLoginComponent 
  },
  {
    path: 'confirmation-screen', component: ConfirmationScreenComponent
  },
  {
    path: 'shelf', component: ShelfComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SelfLoginComponent,
    ConfirmationScreenComponent,
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
