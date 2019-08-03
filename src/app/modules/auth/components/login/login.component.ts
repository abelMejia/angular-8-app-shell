import { Component, OnInit } from '@angular/core';
import { ILogin } from '../../../../shared/interfaces/Ilogin';
import { Login } from '../../../../shared/classes/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	  login: ILogin = {};
	  loginForm: FormGroup;

	  constructor(private formBuilder: FormBuilder) {}

	  ngOnInit() {
	    this.loginForm = this.formBuilder.group({
	      username: [null, [Validators.required, Validators.email]],
	      password: [null, [Validators.required, Validators.minLength(8)]]
	    });
	  }

	  onOverride(event: any, obj: {}) {
	    obj[event.name] = event.data;
	  }

	  doLogin() {
	    console.log('Doing login');
	  }

}
