import { Component, VERSION } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HasValidExp} from './validExp';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  control: FormGroup;

  // need to create a validator for min and for confirming completion date to current date > exp
  constructor(private formBuilder: FormBuilder) {
    this.control = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]], 
      email: ['', [Validators.required, Validators.email]], 
      phone: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(16)]],
      joinDate: ["2020-05-27", Validators.required],
      completionDate: ['', Validators.required],
      exp: ['', [Validators.required, Validators.min(0)]],
      acceptTerm: [false, Validators.requiredTrue]
    }, {
            validator: HasValidExp('exp', 'completionDate')
        });
  }

  get formgroupcontrols() {
    return this.control.controls;
  }

  onClick() {
    alert("success");
  }
}
