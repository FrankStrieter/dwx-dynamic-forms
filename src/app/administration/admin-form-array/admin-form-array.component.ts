import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dwx-admin-form-array',
  templateUrl: './admin-form-array.component.html',
  styleUrls: ['./admin-form-array.component.scss'],
})
export class AdminFormArrayComponent implements OnInit {
  @Input() control;
  constructor() {}

  ngOnInit() {}
}
