import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ApprovalComponent } from './approval.component';
import { MeetComponent } from './meet/meet.component';

const routes: Routes = [{
  path: '',
  component: ApprovalComponent,
  children: [{
    path: 'meet',
    component: MeetComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovalRoutingModule { }

export const routedComponents = [
  ApprovalComponent,
  MeetComponent,
];

