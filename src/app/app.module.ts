import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component'

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';


//Added for toast message
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';
import { SignupComponent } from './user/signup/signup.component';
import { AppService } from './app.service';
import { ChatBoxComponent } from './chat/chat-box/chat-box.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ChatModule,
    UserModule,
    FilterPipeModule,
    ToastModule.forRoot(),

    RouterModule.forRoot([
      {path :'login',component:LoginComponent},
      {path :'signup',component:SignupComponent},
      {path :'chat', component:ChatBoxComponent},
      {path : '',redirectTo:'login',pathMatch:'full'},
      {path :'*',component:LoginComponent},
      {path :'**',component:LoginComponent}

    ])

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
