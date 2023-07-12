import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MiddleComponent } from './middle/middle.component';
import { RightComponent } from './right/right.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MiddleIconsComponent } from './middle-icons/middle-icons.component';
import { RightIconsComponent } from './right-icons/right-icons.component';
import { FeedsComponent } from './feeds/feeds.component';
import { ProfilePicsComponent } from './profile-pics/profile-pics.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { AddsComponent } from './adds/adds.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { NavBarBottomComponent } from './nav-bar-bottom/nav-bar-bottom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainSectionComponent,
    NavBarComponent,
    MiddleComponent,
    RightComponent,
    SearchBarComponent,
    MiddleIconsComponent,
    RightIconsComponent,
    FeedsComponent,
    ProfilePicsComponent,
    CommentsComponent,
    ContactsComponent,
    BirthdaysComponent,
    AddsComponent,
    NavBarTopComponent,
    NavBarBottomComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
