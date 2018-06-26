import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dwx-admin-form-group',
  templateUrl: './admin-form-group.component.html',
  styleUrls: ['./admin-form-group.component.scss'],
})
export class AdminFormGroupComponent implements OnInit {
  @Input() control;
  edit: boolean;
  constructor() {}

  ngOnInit() {}
  toggleEdit(event) {
    this.edit = !this.edit;
  }
}
