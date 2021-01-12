import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { FormGroup , FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  usersdetails = new FormGroup({
    UserName : new FormControl(''),
    Password : new FormControl(''),
    FirstName : new FormControl(''),
    LastName : new FormControl(''),
    Email : new FormControl(''),
    PhoneNo : new FormControl(''),
  })

  constructor(private http : APIsService) { }

  ngOnInit(): void {
  }
  entereddata(){
    console.log(this.usersdetails.value);
    this.http.users(this.usersdetails.value).subscribe(data=>{
      console.log(data);
    })
  }
}
