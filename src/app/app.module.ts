import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonComponentsModule } from 'common-components';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationModule } from './authentication/authentication.module';
import { DynamicFormsModule } from 'dynamic-forms';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    AuthenticationModule,
    CommonComponentsModule,
    DynamicFormsModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
