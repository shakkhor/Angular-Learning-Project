import { PasswordValidators } from './password.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent {

  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.incorrectPassword),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required, PasswordValidators.passwordsShouldMatch])
  });

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    //debugger;
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    // debugger;
    return this.form.get('confirmPassword');
  }

}
