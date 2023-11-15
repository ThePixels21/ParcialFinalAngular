import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService){}

  ngOnInit() {
    sessionStorage.clear()
    this.loginForm = this.initForm()
  }

  initForm(){
    return this.fb.group({
      email: ['santiago@email.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]]
    })
  }

  onLogin(){
    if(this.loginService.onLogin(this.loginForm.value.email, this.loginForm.value.password)){
      this.router.navigateByUrl('dashboard')
      SwalUtils.customMessageOk('Successful', 'Login successful')
    }else{
      SwalUtils.customMessageError('Error', 'Incorrect user or password')
    }
  }

  onGuest(){
    sessionStorage.setItem('role', 'guest')
    this.router.navigateByUrl('dashboard')
    SwalUtils.customMessageOk('Hello', 'Joined like guest')
  }

}
