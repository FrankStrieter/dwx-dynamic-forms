import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminFormInputComponent } from './admin-form-input/admin-form-input.component';
import { AdminFormGroupComponent } from './admin-form-group/admin-form-group.component';
import { AdminFormArrayComponent } from './admin-form-array/admin-form-array.component';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { AdmininstrationRoutinModule } from './administration-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    NgxDnDModule,
    AdmininstrationRoutinModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    AdminFormInputComponent,
    AdminFormGroupComponent,
    AdminFormArrayComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AdministrationModule {}
