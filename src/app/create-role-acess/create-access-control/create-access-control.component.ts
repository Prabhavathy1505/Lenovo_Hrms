import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-access-control',
  templateUrl: './create-access-control.component.html',
  styleUrls: ['./create-access-control.component.css']
})
export class CreateAccessControlComponent {
  CreateAccessControl: FormGroup;
  constructor(
         private formBuilder: FormBuilder, 
       
         public router:Router)
          { }
          ngOnInit() {
                 this.createForm();
                //  this.getdata();
               }

               createForm() 
                {
                
                this.CreateAccessControl = this.formBuilder.group ({
                  WebVPNID: new FormControl('',[Validators.required]),
                  UserName: new FormControl('',[Validators.required]),
                  EmailID: new FormControl('',[Validators.required]),
                 Role: new FormControl('',[Validators.required]),
                 Location: new FormControl('',[Validators.required]),
                 Department: new FormControl('',[Validators.required]),
                 SubDepartment: new FormControl('',[Validators.required]),
                 Status: new FormControl('',[Validators.required]),
                })
                  }
                  Reset() {
                         this.CreateAccessControl.reset({
                          WebVPNID:'',
                          UserName: '',
                          EmailID: '',
                          Role: '',
                          Location: '',
                          Department: '',
                          SubDepartment: '',
                          Status: '',
                          });
                       }
                       
 Submit1() {
          if (this.CreateAccessControl.valid) {
            console.log(this.CreateAccessControl.value);
           alert("searched complete")
           this.router.navigate(['CreateRoleAcess/AccessControl']);
 } 
             else {
           alert("Search Failed");
              }
                      }
                    }
//   DepartmentSummary: FormGroup;
//   users: any = [] ;
//   constructor(
//      private formBuilder: FormBuilder, 
//      private mockService:MockserviceService,
//      public router:Router)
//       { }
 
//    ngOnInit() {
//      this.createForm();
//      this.getdata();
//    }
//    getdata(){
//          this.mockService.getUsers1().subscribe((data:any) => {
//            console.log(data)
//            this.users = data.users;
//          });
//        }
//  createForm() 
//  {
 
//  this.DepartmentSummary = this.formBuilder.group ({
//   DepartmentName: new FormControl('',[Validators.required]),
//   SubDepartmentName: new FormControl('',[Validators.required]),
   
//                                  })
//    }

//    Reset() {
//      this.DepartmentSummary.reset({
//       DepartmentName:'',
//       SubDepartmentName: '',
      
//       });
//    }
 
//  Submit1() {
//  if (this.DepartmentSummary.valid) {
//  console.log(this.DepartmentSummary.value);
//  alert("searched complete")
//  this.router.navigate(['CreateRoleAcess/CreateDepartment']);
//  } 
//  else {
//  alert("Search Failed");
//  }
 
//  }