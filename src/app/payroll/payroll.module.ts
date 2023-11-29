import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { CreatePayrollComponent } from './create-payroll/create-payroll.component';


@NgModule({
  declarations: [
    CreatePayrollComponent
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule
  ]
})
export class PayrollModule { }
