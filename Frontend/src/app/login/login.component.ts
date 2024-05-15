import { Component } from '@angular/core';
import { take } from 'rxjs';
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginType: string = 'voter';
  voterCardNumber: string = '';
  email: string = '';
  password: string = '';
  errorMessage:string='';

  isShowPassword: boolean = false;
  
  constructor(
    private service: VoterService
  ) {}

  login(): void {
    const body: any = {
      "userPassword": this.password
    }
    let requstType: any = null;
    let flag = 0;
    
    if (this.loginType === 'voter') {
      if (this.voterCardNumber === '') {
        // alert('Voter card should not be blank');
        this.errorMessage = 'Voter card should not be blank';
        return;
      }
      if (this.voterCardNumber === '' || this.voterCardNumber.length < 10 || this.voterCardNumber.length > 10) {
        //alert('Voter Card Number must contain atleast 10 characters');
        this.errorMessage = 'Voter Card Number must contain atleast 10 characters';
        return;
      }
      // const re1 = (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,};
      if (this.password === '') {
        this.errorMessage = 'Password should not be blank';
        return;
      }
     
    } else if (this.loginType === 'admin'){
      if (this.email === '') {
       //  alert('Email address should not be blank');
        this.errorMessage = 'Email address should not be blank';
        return;
      }
      const re = /\S+@\S+\.\S+/;
   if(!re.test(this.email)){
    this.errorMessage="Email addresss not valid";
    return;
   }
      if (this.password === '') {
        this.errorMessage = 'Password should not be blank';
        return;
      }
    }
    this.errorMessage = '';

    if (this.loginType === 'voter') {
      body.userVotingCardNumber = this.voterCardNumber;
      requstType = this.service.signInByCard(body);
    } else {
      body.userEmail = this.email
      requstType = this.service.signInByEmail(body);
    }
    requstType.pipe(take(1)).subscribe((response: any) => {
      console.log('>>>>', response);
      if (response?.userRole === 'voter' && response?.activateAccount === false) {
        // alert('Your account is not active, Please try after some time');
        this.errorMessage = 'Your account is not active, Please try after some time';

        return;
      }
      this.service.storeLoggedInUser(response);
      localStorage.setItem('uname', response?.userName);
      localStorage.setItem('uId', response?.userId);
      localStorage.setItem('role', response?.userRole);
      if (response?.userRole === 'voter') {
        this.service.navigateToLink('voterhome');
      } else {
        this.service.navigateToLink('adminhome');
      }
    })
  }
  clearMessage(): void {
    this.errorMessage = '';
  }

  openForgotPassword(): void {
    this.service.navigateToLink('forgotpassword');
  }


  showHidePassword(): void {
    const passElement = document.getElementById("password");
   
      if (passElement) {
        passElement.setAttribute('type', this.isShowPassword ? 'password' : 'text');
        this.isShowPassword = !this.isShowPassword;
      }
  
  }

}
