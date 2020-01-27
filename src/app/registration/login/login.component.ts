import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private _router:Router){
  
  }

  
  ngOnInit() {
  }

  navigateToHome(){
    this._router.navigate(["/home"])
  }
  



}
