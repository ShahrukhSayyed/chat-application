import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule, Routes } from '@angular/router';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from '../shared/user-details/user-details.component';
import { RemoveSpecialCharPipe } from './../shared/pipe/remove-special-char.pipe';
import { ChatRouteGuardService } from './chat-route-guard.service';

import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FilterPipeModule,
    ToastModule.forRoot(),
    RouterModule.forChild([ 
      { path: 'chat', component: ChatBoxComponent,canActivate:[ChatRouteGuardService] }
    ]),
    SharedModule
  ],
  declarations: [ChatBoxComponent,RemoveSpecialCharPipe],
  providers:[ChatRouteGuardService]

})
export class ChatModule { }
