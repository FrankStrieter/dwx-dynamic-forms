import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsFactoryService } from './forms-factory/forms-factory.service';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsModule } from 'dynamic-forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DynamicFormsModule],
  providers: [FormsFactoryService],
  declarations: [FormComponent],
  exports: [FormComponent],
})
export class CoreModule {}
