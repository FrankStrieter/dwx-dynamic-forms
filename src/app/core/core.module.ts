import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsFactoryService } from './forms-factory/forms-factory.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [FormsFactoryService],
  declarations: []
})
export class CoreModule { }
