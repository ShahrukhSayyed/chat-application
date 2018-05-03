import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';

import { AppService } from '../../app.service';
import { SocketService } from '../../socket.service';

import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { RemoveSpecialCharPipe } from '../../shared/pipe/remove-special-char.pipe';
import { FirstCharComponent } from '../../shared/first-char/first-char.component';

import { ChatMessage } from './chat'
import { CheckUser } from '../../CheckUser'

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
  providers: [SocketService]
})
export class ChatBoxComponent implements OnInit, ChatMessage {

  chatId?: string;
  message: string;
  createdOn: Date;
  senderId: string;
  senderName: string;
  @ViewChild('scrollMe', { read: ElementRef })

  public scrollMe: ElementRef;

  public authToken: any;
  public userInfo: any;
  public receiverId: any;
  public receiverName: any;
  public userList: any = [];
  public unseenUserList: any = [];
  public disconnectedSocket: boolean;
  public loggedInUser: string;
  public messageText: any;
  public messageList: any = []; // stores the current message list display in chat box
  public pageValue: number = 0;
  public loadingPreviousChat: boolean = false;
  public scrollToChatTop: boolean = false;
  public unseenMessage: number;



  constructor(public appService: AppService, public socketService: SocketService, public router: Router, private toastr: ToastsManager,
    vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    //console.log("On Init is called");
    this.authToken = Cookie.get('authToken');
    this.userInfo = this.appService.getUserInfoFromLocalstorage();
    this.loggedInUser = Cookie.get('loggedInUser');

    this.verifyUserConfirmation();
    this.getOnlineUserList();
    this.getunseenUserList();
    this.getMessageFromAUser()
  }

  ngOnChanges() {
    //console.log("On changes is called");
  }

  public verifyUserConfirmation: any = () => {
    this.socketService.verifyUser()
      .subscribe((apiResponse) => {
        this.disconnectedSocket = false;
        this.socketService.setUser(this.authToken);

      },
        (err) => {
          this.toastr.error("Some error occured");
        });
  } // end verifyUserConfirmation


  public getOnlineUserList: any = () => {
    this.socketService.onlineUserList()
      .subscribe((respnseList) => {
        this.userList = [];

        for (let x in respnseList) {
          let count: number;
          if (this.loggedInUser != x) {
            this.appService.getCount(this.loggedInUser, x)
              .subscribe((apiResponse) => {
                if (apiResponse.status === 200) {
                  count = apiResponse.data;

                } else {
                  this.toastr.error(apiResponse.message)

                } // end condition

                  let temp = { 'userId': x, 'name': respnseList[x], 'chatting': false, 'unread': count ,'online' : true};
                  this.userList.push(temp);
                  //console.log(this.userList);

              },
                (err) => {
                  this.toastr.error("Some error occured");
                });
          }
        }
      },
        (err) => {
          this.toastr.error("Some error occured");
        });

  }//end getOnlineUserList


  public getChatWithUser: any = () => {
    let previousData = (this.messageList.length > 0 ? this.messageList.slice() : []);

    this.appService.getChat(this.userInfo.userId, this.receiverId, this.pageValue * 10)
      .subscribe((apiResponse) => {

        //console.log(apiResponse);

        if (apiResponse.status == 200) {
          this.messageList = apiResponse.data.concat(previousData);
        } else {
          this.messageList = previousData;
          this.toastr.warning('No Messages available');
        }
        this.loadingPreviousChat = false;
      },
        (err) => {
          this.toastr.error("Some error occured");
        });

  }//end getChatWithUser


  public userSelectedToChat: any = (id, name) => {

    //console.log("setting user as active")

    // setting that user to chatting true   
    this.userList.map((user) => {
      if (user.userId == id) {
        user.chatting = true;
        //console.log(user.chatting);
      }
      else {
        user.chatting = false;
      }
    })
    Cookie.set('receiverId', id);

    Cookie.set('receiverName', name);


    this.receiverName = name;

    this.receiverId = id;

    this.messageList = [];

    this.pageValue = 0;

    let chatDetails = {
      userId: this.userInfo.userId,
      senderId: id
    }


    this.socketService.markChatAsSeen(chatDetails);

    this.getChatWithUser();

  } // end userBtnClick function

  public loadEarlierPageOfChat: any = () => {
    this.loadingPreviousChat = true;

    this.pageValue++;
    this.scrollToChatTop = true;

    this.getChatWithUser()

  } // end loadPreviousChat

  public sendMessageUsingKeypress: any = (event: any) => {

    if (event.keyCode === 13) { // 13 is keycode of enter.

      this.sendMessage();

    }

  } // end sendMessageUsingKeypress

  public sendMessage: any = () => {

    if (this.messageText) {

      let chatMsgObject: ChatMessage = {
        senderName: this.userInfo.firstName + " " + this.userInfo.lastName,
        senderId: this.userInfo.userId,
        receiverName: Cookie.get('receiverName'),
        receiverId: Cookie.get('receiverId'),
        message: this.messageText,
        createdOn: new Date()
      } // end chatMsgObject
      //console.log(chatMsgObject);
      this.socketService.SendChatMessage(chatMsgObject)
      this.pushToChatWindow(chatMsgObject)


    }
    else {
      this.toastr.warning('text message can not be empty')

    }

  } // end sendMessage

  public pushToChatWindow: any = (data) => {

    this.messageText = "";
    this.messageList.push(data);
    this.scrollToChatTop = false;


  }// end push to chat window


  public getMessageFromAUser: any = () => {

    this.socketService.chatByUserId(this.userInfo.userId)
      .subscribe((data) => {


        (this.receiverId == data.senderId) ? this.messageList.push(data) : '';

        this.toastr.success(`${data.senderName} : ${data.message}`)

        this.scrollToChatTop = false;

      });//end subscribe

  }// end get message from a user 


  public logout: any = () => {

    this.appService.logout()
      .subscribe((apiResponse) => {

        //console.log(apiResponse);
        if (apiResponse.status === 200) {
          //console.log("logout called")
          Cookie.delete('authtoken');

          Cookie.delete('receiverId');

          Cookie.delete('receiverName');

          this.socketService.exitSocket()

          this.router.navigate(['/']);

        } else {
          this.toastr.error(apiResponse.message)

        } // end condition

      }, (err) => {
        this.toastr.error('some error occured')


      });

  } // end logout

  // handle the output from a child component 

  public showUserName = (name: string) => {

    this.toastr.success("You are chatting with " + name)
  }

  public getunseenUserList: any = () => {
    this.appService.unseenUserList(this.loggedInUser)
      .subscribe((respnseList) => {

        this.unseenUserList = [];

        for (let x in respnseList.data) {
          let count: number;
          this.appService.getCount(this.loggedInUser, respnseList.data[x].userId)
            .subscribe((apiResponse) => {
              if (apiResponse.status === 200) {
                count = apiResponse.data;

              } else {
                this.toastr.error(apiResponse.message)

              } // end condition
               
                let temp = { 'userId': respnseList.data[x].userId, 'name': respnseList.data[x].firstName + " " + respnseList.data[x].lastName, 'chatting': false, 'unread': count ,'online' : false};
                
                this.unseenUserList.push(temp);  
                //console.log(this.unseenUserList);                
            },
              (err) => {
                this.toastr.error("Some error occured");
              });
        }
      },
        (err) => {
          this.toastr.error("Some error occured");
        });

  }//end getunseenUserList






}
