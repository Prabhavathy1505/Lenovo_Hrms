import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MockserviceService } from 'src/app/mockservice.service';
@Component({
  selector: 'app-access-control-summmary',
  templateUrl: './access-control-summmary.component.html',
  styleUrls: ['./access-control-summmary.component.css']
})
export class AccessControlSummmaryComponent implements OnInit{
  createRole: FormGroup;
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
        this.mockService.getUsers().subscribe((data:any) => {
          console.log(data)
          this.users = data.users;
        });
      }
createForm() 
{

this.createRole = this.formBuilder.group ({
   UserName: new FormControl('',[Validators.required]),
   Role: new FormControl('',[Validators.required]),
   AD_Username: new FormControl('',[Validators.required]),
   Location: new FormControl('',[Validators.required]),
   Department: new FormControl('',[Validators.required]),
   SubDepartment: new FormControl('',[Validators.required])
                                })
  }


  Reset() {
    this.createRole.reset({
      UserName:'',
      Role: '',
      AD_Username:'',
      supplierEmail:'',
      Location:'',
      Department:'',
      SubDepartment:''
     });
  }

Submit1() {
if (this.createRole.valid) {
console.log(this.createRole.value);
alert("Created Role Successfully")
this.router.navigate(['CreateRoleAcess/CreateAccess']);
} 
else {
alert("Created Role Failed");
}

}

}
