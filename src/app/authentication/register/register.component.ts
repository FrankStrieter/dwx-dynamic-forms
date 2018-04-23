import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'dwx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  firstname: string;
  lastname: string;
  street: string;
  phone: string;
  password: string;

  submitForm(form: NgForm) {}
}
