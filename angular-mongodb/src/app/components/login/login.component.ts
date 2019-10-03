import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/redux/app.state';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Utils } from 'src/app/core/services/utils';
import { loginConstants } from './constants/constants';
import { GetAuth } from 'src/app/redux/auth-reducer.ts/auth.actions';
import { loginForm } from './constants/forms';
import { FormBuilderClass } from 'src/app/shared/form-builder';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormBuilderClass implements OnInit {
  public literals: any;
  public formLiterals: any;
  public loginState = true;

  constructor(
    private store: Store<IAppState>,
    public utils: Utils,
    formBuilder: FormBuilder
  ) {
    super(formBuilder);
    this.literals = loginConstants;
    this.buildForm(loginForm);
  }

  login(event) {
    const params = {
      username: this.formGroup.get('username').value,
      password: this.formGroup.get('password').value
    };
    this.store.dispatch(new GetAuth(params));
  }

  ngOnInit() {
    console.log(this.formGroup);
  }

}
