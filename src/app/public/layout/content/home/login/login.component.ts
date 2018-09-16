import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  userForm: FormGroup;

  ngOnInit() {
    this.buidForms();
  }

  buidForms() {
    this.userForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  login() {
    console.log(this.userForm.value)
    if(this.userForm.valid) {
    } else {
    }
  }
}
