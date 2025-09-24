import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from '../../../../shared/components/form/input/checkbox.component';
import { InputFieldComponent } from '../../../../shared/components/form/input/input-field.component';
import { LabelComponent } from '../../../../shared/components/form/label/label.component';

@Component({
  selector: 'register-page',
  imports: [
    CommonModule,
    LabelComponent,
    CheckboxComponent,
    InputFieldComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register-page.component.html',
  styles: ``
})
export default class RegisterPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  public showPassword = false;
  public isChecked = false;

  public fname = '';
  public lname = '';
  public email = '';
  public password = '';

  public loginForm = this.fb.group({
    fname: [''],
    lname: [''],
    email: [''],
    password: [''],
    isChecked: [false]
  });

  public togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  public onSignIn() {
    console.log('First Name:', this.fname);
    console.log('Last Name:', this.lname);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.isChecked);
    this.router.navigate(['/user']);
  }
}
