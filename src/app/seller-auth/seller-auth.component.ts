import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router'
import { SignUp } from '../data-types';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent {

  constructor(private seller:SellerService, private router:Router) {}
  showLogin = false;
  authError:string = '';

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data:SignUp): void {
    console.warn(data);
    this.seller.userSignUp(data)
  }

  login(data:SignUp): void {
    this.authError="";
    // console.warn(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError) {
        this.authError="Email or password was incorrect!";
      }
    })
  }

  openLogin() {
    this.showLogin=true;
  }

  openSignUp() {
    this.showLogin=false;
  }

}