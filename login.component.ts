import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: any;
  submitted = false;
  message = '';
  error: any;
  

constructor(private formbuilder: FormBuilder, private service: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.LoginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.maxLength(8)]]
    })
  }
  get f() {return this.LoginForm.controls}


  Logindata(data: any) {
    console.log(this.LoginForm.value)
    this.service.login(data).subscribe((result) => {
      if(result){
        this.router.navigate(['/clientdata'])
      }
      alert('Login successfull')
      
      
      
      
      })
      }
}



