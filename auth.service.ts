import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';
import{Observable, catchError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "https://jsonplaceholder.typicode.com/posts";
  isUserLoggedin:boolean = false;
  service: any;
  sendresetlink: any;
  constructor(private http:HttpClient ,private route:ActivatedRoute,  private router:Router ) { }
  login(data:any){
     return this.http.post<any>(this.url,data)
    }
  
  getclientdata(){
   return this.http.get("https://localhost:7000/getRequest")
  }
  
  getcompanydata(){
    return this.http.get("  ")

  }
  forgetpassword(data:any){
    return this.http.post<any>('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key =${config.API_KEY}',{
      requestType:'PASSWORD_RESET',
      email:data.email
    }).pipe(
      catchError((err)=>{
        return this.service.handleError(err)
      })
    )   
  }
  
}
