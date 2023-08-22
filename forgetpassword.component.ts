import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  error:any = null;
  success :boolean = false;
  ForgetForm:any;
  constructor(private formbuilder:FormBuilder,private service:AuthService){

  }
  ngOnInit(): void {
    this.ForgetForm = this.formbuilder.group({
      email:['',[Validators.required,Validators.email]]
    })
    
    
  }
  Forgetsubmit(){
    if(this.ForgetForm.valid){
      
      this.service.forgetpassword(this.ForgetForm.value).subscribe((res)=>{
        console.log(res)
        this.success = true;
      },
      (err)=>{
        console.log(err)
      }
      )
    }else{
      let key = Object.keys(this.ForgetForm.controls);
      key.filter(data=>{
        let control = this.ForgetForm.controls[data];
        if(control.error ! = null){
          control.MarkAsTouched();
        }
      })
    }
      
  }

}


