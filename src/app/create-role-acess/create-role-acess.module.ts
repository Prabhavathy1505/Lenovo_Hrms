import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateRoleAcessRoutingModule } from './create-role-acess-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RoleAccessComponent } from './role-access/role-access.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateAccessControlComponent } from './create-access-control/create-access-control.component';
import { AccessControlSummmaryComponent } from './access-control-summmary/access-control-summmary.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentSummaryComponent } from './department-summary/department-summary.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
   
              
           RoleAccessComponent,
           CreateAccessControlComponent,
           AccessControlSummmaryComponent,
           DepartmentSummaryComponent,
           CreateDepartmentComponent
  ],
  imports: [
    CommonModule,
    CreateRoleAcessRoutingModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatCheckboxModule ,HttpClientModule,MatRadioModule
  ] 
})
export class CreateRoleAcessModule { }
