import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePayrollComponent } from './create-payroll/create-payroll.component';

const routes: Routes = [
  {path:'CreatePayroll',component: CreatePayrollComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule {
  
 }
