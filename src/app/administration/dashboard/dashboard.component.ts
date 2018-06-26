import { Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormDataService } from '../../authentication/formdata.service';
import { FormsMapperService } from '../core/forms-mapper.service';
import { Control } from '../core/models/control';

@Component({
  selector: 'dwx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  sourceBuilderTools = [
    { name: '', items: [] as any[], type: 'array', label: '' },
    { name: '', items: [] as any[], type: 'group', label: '' },
    {
      name: '',
      validators: [],
      type: 'input',
      label: '',
      inputtype: 'input',
      placeholder: '',
      options: [],
    },
  ];

  targetBuilderTools = [];
  parsedFormData: any = {};
  constructor(
    private formMapperServcie: FormsMapperService,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {}

  update(event) {
    this.parsedFormData = this.formMapperServcie.getFormData(
      JSON.parse(JSON.stringify(this.targetBuilderTools))
    );
    this.formDataService.propageateForm(this.parsedFormData);
  }
}
