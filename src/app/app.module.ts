import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {
  DrawingDetailsComponent,
  DrawingListComponent,
  DrawingResolveService,
  DrawingService,
  DrawingRouteActivator
  } from './drawings/index'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FavoriteDrawingsComponent } from './favorite-drawings/favorite-drawings.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Error404Component } from './errors/404.component';
import { ContactDetailsComponent } from './contacts/contact-details.component';
import { routes } from './shared/routes'
import { CreateDrawingRequest } from './drawings/create-drawing-request.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawingListComponent,
    HomeComponent,
    FooterComponent,
    FavoriteDrawingsComponent,
    ContactsComponent,
    DrawingDetailsComponent,
    Error404Component,
    CreateDrawingRequest,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
