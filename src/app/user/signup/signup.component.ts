import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[AppService]
})
export class SignupComponent implements OnInit {

  public firstName: any;
  public lastName: any;
  public mobile: any;
  public email: any;
  public password: any;
  public apiKey: any;

  constructor(public appService: AppService, public router: Router, private toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
  }

  public gotoSignIn: any = () => {
    this.router.navigate(['/']);
  }

  public signUp: any = () => {
    if (!this.firstName) {
      this.toastr.warning("Enter First Name");
    }
    else if (!this.lastName) {
      this.toastr.warning("Enter Last Name");
    }
    else if (!this.mobile) {
      this.toastr.warning("Enter Mobile Number");
    }
    else if (!this.email) {
      this.toastr.warning("Enter Email Address");
    }
    else if (!this.password) {
      this.toastr.warning("Enter Password");
    }
    else if (!this.apiKey) {
      this.toastr.warning("Enter API Key");
    }
    else {
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobile: this.mobile,
        email: this.email,
        password: this.password,
        apiKey: this.apiKey
      }

      this.appService.signUp(data)
        .subscribe((apiResponse) => {

          //console.log(apiResponse);
          if (apiResponse.status == 200) {
            this.toastr.success('You are registered Successfully');
            setTimeout(() => {
              this.gotoSignIn();
            }, 2000);
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
