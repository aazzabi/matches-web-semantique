import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EmojiPickerModule } from 'ng-emoji-picker';
import { PushNotificationsModule } from 'ng-push';
import { Ng2Webstorage } from 'ngx-webstorage';
import { FileDropModule } from 'ngx-file-drop';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth/auth.service';
import { StoreService } from './store/store.service';
import { MapComponent } from './map/map.component';
import { HttpModule, Http } from '@angular/http';
import {GetdataService} from './getdata.service';
import { StadeComponent } from './stade/stade.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    MapComponent,
    StadeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    EmojiPickerModule,
    PushNotificationsModule,
    Ng2Webstorage,
    FileDropModule,
    AppRoutingModule,
    SharedModule,
     AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyCEjamb9D0FOm3MuWynOjLGXUTejDclRcA'
    }),
     AgmDirectionModule
  ],
  providers: [
    AuthService,
    GetdataService,
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
