import { ViewCell } from 'ng2-smart-table';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  template: `
  {{renderValue}}
  `,
})
export class RoleRenderComponent implements ViewCell, OnInit {

  renderValue: string;
  @Input() rowData: any;
  @Input() value: string | number;

  ngOnInit(): void {
    if (this.value.toString() === '1') {
      this.renderValue = '管理员';
    } else if (this.value.toString() === '2') {
      this.renderValue = '用户';
    }
  }
}
