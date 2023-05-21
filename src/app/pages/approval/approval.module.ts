import { ApprovalRoutingModule, routedComponents } from './approval-routing.module';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [
    ApprovalRoutingModule,
    RouterOutlet,
    NbButtonModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
  declarations: [...routedComponents ],
})
export class ApprovalModule {}
