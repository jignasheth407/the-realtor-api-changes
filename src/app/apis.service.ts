import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class APIsService {

  constructor(private http : HttpClient , private router : Router) { }

 featuringlist(){
    let url = "https://realtorapi.yellow-chips.com/realtor/1/featuredlisting/all";
    return this.http.get(url);
               
  }

  agentdetail(){
    let url = "https://realtorapi.yellow-chips.com/agents/1";
    return this.http.get(url);
  }

  searchMlsno(data){
     let url = "https://realtorapi.yellow-chips.com/realtor/1/mls/ReferenceNumber="+data;
     return this.http.get(url);
  }
 

  subcrption(data:any){
    console.log();
    let url = "https://realtorapi.yellow-chips.com/NewsLetters";
    return this.http.post(url,data);
 }

 visitors(data : any){
   let url = "https://realtorapi.yellow-chips.com/visitors";
   return this.http.post(url,data);                
 }


 users(data : any){
   //registration api
   let url = "https://realtorapi.yellow-chips.com/users";
   return this.http.post(url,data);
                
 }
 

 login(data : any){
  let url = "https://realtorapi.yellow-chips.com/users/authenticate";
  return this.http.post(url,data);
            
 }

 loggedin(){
   return !!localStorage.getItem('token');
 }

 logoutuser(){

   localStorage.removeItem('token');
   this.router.navigate(['./login']);
 }

 userprofile(){
  let url = "https://realtorapi.yellow-chips.com/Users";
  return this.http.get(url);
 }
 
  
}
