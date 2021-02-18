import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserModel} from '../../models/User.models';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor() { }

  ngOnInit(): void {
    this.user.email = "",
    this.user.name = "",
    this.user.password = ""
  }

  sendData(form: NgForm){
    console.log("formulario:", form);
    console.log("user: ", this.user);
    console.log("email: ", this.user.email);
    console.log("name: ", this.user.name);
    console.log("password: ", this.user.password);
  }
}
