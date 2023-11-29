import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleAccessComponent } from './role-access/role-access.component';
import { CreateAccessControlComponent } from './create-access-control/create-access-control.component';
import { AccessControlSummmaryComponent } from './access-control-summmary/access-control-summmary.component';
import { DepartmentSummaryComponent } from './department-summary/department-summary.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';

const routes: Routes = [
  {path:'RoleAcces',component:RoleAccessComponent},
  {path:'CreateAccess',component:CreateAccessControlComponent},
  {path:'AccessControl',component:AccessControlSummmaryComponent},
  {path:'DepartmentSummary',component:DepartmentSummaryComponent},
  {path:'CreateDepartment',component:CreateDepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoleAcessRoutingModule { }
