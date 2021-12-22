

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
   selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
   fname:any;
   lname:any;
   email:any;
   phone:any;
   formData:any;
   allData:any=[];
   displayTable:boolean=false;

   
   constructor() {  }
   ngOnInit() {
    this.formData=new FormGroup({
      fname:new FormControl('',Validators.required),
      lname:new FormControl(''),
      email:new FormControl(''),
      phone:new FormControl(''),
    });
   
    
   }

   onSubmit(data:any){
     this.fname=data.fname;
     this.lname=data.lname;
     this.email=data.email;
     this.phone=data.phone;
     console.log(data);
     this.allData.push(data);
     this.displayTable=true;
     setTimeout(()=> {
      this.formData.reset({
        fname:"",
        lname:"",
        email:"",
        phone:""
        })
     })
     
   }
   
}
