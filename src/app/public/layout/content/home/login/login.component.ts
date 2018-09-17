import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
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
      this.authService.login().then(res => {
        console.log(res)
      })
    } else {
    }
  }
}
