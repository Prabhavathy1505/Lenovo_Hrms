import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-role-access',
  templateUrl: './role-access.component.html',
  styleUrls: ['./role-access.component.css']
})
export class RoleAccessComponent implements OnInit{
  RoleAccess: FormGroup;
  constructor(
         private formBuilder: FormBuilder, 
         public router:Router)
          { }
  
  
  
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
   
  // }



   ngOnInit() {
     this.createForm();
    //  this.getdata();
   }
  checkedAllAdd= false;
  checkedAllEdit= false;
  checkedAllDelete= false;
  checkedAllView= false;
  checkedAllAccess=false;
  item: any;

  createForm() 
   {
   
   this.RoleAccess = this.formBuilder.group ({
    RoleCode: new FormControl('',[Validators.required]),
    RoleName: new FormControl('',[Validators.required])
     
                                   })
     }
     Reset() {
           this.RoleAccess.reset({
            RoleCode:'',
            RoleName: '',
            
            });
         }
         Submit1() {
           if (this.RoleAccess.valid) {
           console.log(this.RoleAccess.value);
           alert("searched complete")
           this.router.navigate(['CreateRoleAcess/CreateAccess']);
           } 
           else {
           alert("Search Failed");
           }
           
           }  

  selectAllAccess(item:any)
   {
    if (item.target.checked == true)
     {
      this.checkedAllAccess = true;
     
      }
    
    else {
      this.checkedAllAccess = false;
      
      }
    }
    selectAllAdd(item:any)
   {
    if (item.target.checked == true)
     {
      this.checkedAllAdd = true;
     
      }
    
    else {
      this.checkedAllAdd = false;
      
      }
    }
    selectAllEdit(item:any)
   {
    if (item.target.checked == true)
     {
      this.checkedAllEdit = true;
     
      }
    
    else {
      this.checkedAllEdit = false;
      
      }
    }
    selectAllDelete(item:any)
   {
    if (item.target.checked == true)
     {
      this.checkedAllDelete = true;
     
      }
    
    else {
      this.checkedAllDelete = false;
      
      }
    }
    selectAllView(item:any)
   {
    if (item.target.checked == true)
     {
      this.checkedAllView = true;
     
      }
    
    else {
      this.checkedAllView = false;
      
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
  


