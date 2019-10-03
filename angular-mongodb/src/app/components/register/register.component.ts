import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/redux/app.state';
import { Utils } from 'src/app/core/services/utils';
import { FormBuilder } from '@angular/forms';
import { registerForms } from './constants/forms';
import { registerConstants } from './constants/constants';
import { GetRegister } from 'src/app/redux/auth-reducer.ts/auth.actions';
import { FormBuilderClass } from 'src/app/shared/form-builder';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent extends FormBuilderClass implements OnInit {
  public literals: any;

  constructor(
    private store: Store<IAppState>,
    public utils: Utils,
    formBuilder: FormBuilder
  ) {
    super(formBuilder);
    this.literals = registerConstants;
    this.buildForm(registerForms);
  }

  public register(event) {
    const params = {
      username: this.formGroup.get('username').value,
      password: this.formGroup.get('password').value,
      email: this.formGroup.get('email').value,
      repeatPassword: this.formGroup.get('repeatPassword').value
    };
    this.store.dispatch(new GetRegister(params));
  }

  ngOnInit() { }
}
