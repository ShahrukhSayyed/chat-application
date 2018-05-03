import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;

  constructor(public appService: AppService, public router: Router, private toastr: ToastsManager, 
  vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }


  ngOnInit() {
  }

  public gotoChat: any = () => {
    this.router.navigate(['/chat']);
  }

  public signIn: any = () => {
    if (!this.email) {
      this.toastr.warning("Enter Email Address");
    }
    else if (!this.password) {
      this.toastr.warning("Enter Password");
    }
    else {
      let data = {
        email: this.email,
        password: this.password,
      }

      this.appService.signIn(data)
        .subscribe((apiResponse) => {

          //console.log(apiResponse);
          if (apiResponse.status == 200) {
            
            Cookie.set('authToken',apiResponse.data.authToken);
            //Cookie.set('receiverId',apiResponse.data.userDetails.userId);
            //Cookie.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
            Cookie.set('loggedInUser',apiResponse.data.userDetails.userId);

            /*  
            //userDetails =>
            "mobileNumber": 2234435524,
            "email": "someone@mail.com",
            "lastName": "Sengar",
            "firstName": "Rishabh",
            "userId": "-E9zxTYA8"
            
            */
            this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails)
            this.toastr.success('You are Login Successfully');
            

            setTimeout(() => {
              this.gotoChat();
            }, 1000);

            this.router.navigate(['/chat']);

          }
          else {
            this.toastr.error(apiResponse.message);
          }
        },
        (err)=>{
          this.toastr.error("Some error occured");
        });

    }//End condition
  }//End signup function


}
