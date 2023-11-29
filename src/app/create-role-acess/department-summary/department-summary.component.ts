import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockserviceService } from 'src/app/mockservice.service';

@Component({
  selector: 'app-department-summary',
  templateUrl: './department-summary.component.html',
  styleUrls: ['./department-summary.component.css']
})
export class DepartmentSummaryComponent {
  DepartmentSummary: FormGroup;
  users: any = [] ;
  constructor(
     private formBuilder: FormBuilder, 
     private mockService:MockserviceService,
     public router:Router)
      { }
 
   ngOnInit() {
     this.createForm();
     this.getdata();
   }
   getdata(){
         this.mockService.getUsers1().subscribe((data:any) => {
           console.log(data)
           this.users = data.users;
         });
       }
 createForm() 
 {
 
 this.DepartmentSummary = this.formBuilder.group ({
  DepartmentName: new FormControl('',[Validators.required]),
  SubDepartmentName: new FormControl('',[Validators.required]),
   
                                 })
   }

   Reset() {
     this.DepartmentSummary.reset({
      DepartmentName:'',
      SubDepartmentName: '',
      
      });
   }
 
 Submit1() {
 if (this.DepartmentSummary.valid) {
 console.log(this.DepartmentSummary.value);
 alert("searched complete")
 this.router.navigate(['CreateRoleAcess/CreateDepartment']);
 } 
 else {
 alert("Search Failed");
 }
 
 }

}
