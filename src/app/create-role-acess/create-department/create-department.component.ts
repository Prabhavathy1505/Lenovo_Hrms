import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockserviceService } from 'src/app/mockservice.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent {
  CreateDepartment: FormGroup;
  users1: any = [] ;
  users2: any = [] ;
selectedOption:string;
  constructor(
     private formBuilder: FormBuilder, 
     private mockService:MockserviceService,
     public router:Router)
      { }
 
   ngOnInit() {
     this.createForm();
     this.getdata1();
     this.getdata2();
   }
   getdata1(){
         this.mockService.getUsers().subscribe((data:any) => {
           console.log(data)
           this.users1 = data.users1;
         });
       }
    getdata2(){
        this.mockService.getUsers().subscribe((data:any) => {
          console.log(data)
          this.users2= data.users2;
        });
      }
 createForm() 
 {
 
 this.CreateDepartment = this.formBuilder.group ({
  DepartmentName: new FormControl('',[Validators.required]),
  Location: new FormControl('',[Validators.required]),
  ManagerName:new FormControl('',[Validators.required]),
  ManagerEmailID:new FormControl('',[Validators.required]), 
  SubDepartmentName: new FormControl('',[Validators.required]),  
  SubDeptManagerName:new FormControl('',[Validators.required]),
  SubDeptManagerEmailID: new FormControl('',[Validators.required])                        })
   }

   Reset() {
     this.CreateDepartment.reset({
      DepartmentName:'',
      SubDepartmentName: '',
      
      });
   }
 
 Submit1() {
 if (this.CreateDepartment.valid) {
 console.log(this.CreateDepartment.value);
 alert("searched complete")
 this.router.navigate(['CreateRoleAcess/RoleAcces']);
 } 
 else {
 alert("Search Failed");
 }
 
 }
}
