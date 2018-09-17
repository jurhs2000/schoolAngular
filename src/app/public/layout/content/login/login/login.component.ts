import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class UserErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginLoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  matcher = new UserErrorStateMatcher();

  userForm: FormGroup;

  ngOnInit() {
    this.buidForms();
  }

  buidForms() {
    this.userForm = this.formBuilder.group({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      remember: [false]
    });
  }

  login() {
    if(this.userForm.valid) {
      this.authService.login(this.userForm.value)
    }
  }
}
