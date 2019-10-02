import { Component, OnInit } from '@angular/core';
import { FormBuilderClass } from 'src/app/shared/form-builder.abstract';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/redux/app.state';
import { Utils } from 'src/app/core/services/utils';
import { FormBuilder } from '@angular/forms';
import { registerForms } from './constants/forms';
import { registerConstants } from './constants/constants';

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

  ngOnInit() { }
}
