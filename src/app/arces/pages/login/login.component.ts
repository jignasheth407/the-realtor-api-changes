import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   loginuser = new FormGroup({
    UserName : new FormControl(''),
    Password : new FormControl(''),
   })

  constructor(private http : APIsService) { }

  ngOnInit(): void {
  }

  loggeduser(){
    console.log(this.loginuser.value);
    this.http.login(this.loginuser.value).subscribe((data)=>{
      console.log(data);
    }
    // ,(error)=>{
    //  alert("invalid Username/Password...!!")
    // }
    )
  }

}
