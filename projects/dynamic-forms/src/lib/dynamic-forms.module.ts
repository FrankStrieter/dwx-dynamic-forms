import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './form-components/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckboxComponent } from './form-components/checkbox/checkbox.component';
import { RadiogroupComponent } from './form-components/radiogroup/radiogroup.component';
import { PropertiesPipe } from './modifiers/form-properties.pipe';
import { MatSelectModule } from '@angular/material/select';
import { SelectComponent } from './form-components/select/select.component';
import { DoubleInputVerificationComponent } from './form-components/double-input-verification/double-input-verification.component';
import { FormsFactoryService } from './core/forms-factory/forms-factory.service';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    InputComponent,
    CheckboxComponent,
    RadiogroupComponent,
    SelectComponent,
    DoubleInputVerificationComponent,
    PropertiesPipe,
    FormComponent,
  ],
  providers: [FormsFactoryService],
  exports: [
    SelectComponent,
    InputComponent,
    CheckboxComponent,
    RadiogroupComponent,
    DoubleInputVerificationComponent,
    PropertiesPipe,
    FormComponent,
  ],
})
export class DynamicFormsModule {}
