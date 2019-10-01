import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/redux/app.state';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Utils } from 'src/app/core/services/utils';
import { loginConstants } from './constants/constants';
import { loginErrors } from './constants/errors';
import { GetAuth } from 'src/app/redux/auth-reducer.ts/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  literals: unknown;
  errors: unknown;

  constructor(
    private store: Store<IAppState>,
    private formBuilder: FormBuilder,
    public utils: Utils
  ) {
    this.literals = loginConstants;
    this.errors = loginErrors;
  }

  login(event) {
    const params = {
      username: this.formGroup.get('username').value,
      password: this.formGroup.get('password').value
    };
    this.store.dispatch(new GetAuth(params));
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.buildForm();
  }

}
