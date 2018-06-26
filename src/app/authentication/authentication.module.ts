import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { DynamicFormsModule } from 'dynamic-forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    DynamicFormsModule,
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
})
export class AuthenticationModule {}
