import { Injectable } from '@angular/core';

//Added for Http and Observables
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Cookie } from 'ng2-cookies/ng2-cookies';

import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  public baseUrl = "https://chatapi.edwisor.com";
  public socket;

  constructor(private _http: HttpClient) {
    //console.log("SocketService is called");
    //handshake is happening
    this.socket = io(this.baseUrl);

  }


  //events that has to be listen
  public verifyUser = () => {
    return Observable.create((observer) => {
      this.socket.on('verifyUser', (data) => {
        observer.next(data);
      });//On method
    });//end observable
  }//end verifyUser

  public onlineUserList = () => {
    return Observable.create((observer) => {
      this.socket.on('online-user-list', (userList) => {
        observer.next(userList);
      });//end On method
    });//end observable

  }//end onlineUserList

  public disconnect = () => {
    return Observable.create((observer) => {
      this.socket.on('disconnect', () => {
        observer.next();
      });//end On method
    });//end observable

  }//end disconnect



  //* Events that are emitted *//

  public setUser = (authToken) => {
    this.socket.emit('set-user', authToken);
  }

  public markChatAsSeen = (userDetails) => {
    this.socket.emit('mark-chat-as-seen', userDetails);
  }

  public SendChatMessage = (chatDetails) => {
    this.socket.emit('chat-msg', chatDetails);
  }

  //method to handle http calls
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error HTTP calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }


  public chatByUserId = (userId) => {
    return Observable.create((observer) => {
      this.socket.on(userId, (data) => {
        observer.next(data);
      }); // end Socket
    }); // end Observable
  } // end chatByUserId

  public exitSocket = () =>{
    this.socket.disconnect();
  }// end exit socket


}

