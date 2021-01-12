import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   
  vistordata = new FormGroup({
    companyId : new FormControl('1'),
    FirstName : new FormControl(''),
    LastName : new FormControl(''),
    Email : new FormControl(''),
    PhoneNo : new FormControl(''),
    Subject : new FormControl(''),
    Message : new FormControl(''),
  })
  constructor(private http : APIsService) { }

  ngOnInit(): void {
  }
  
  vistdata(){
    this.http.visitors(this.vistordata.value).subscribe(data=>{
     console.log(data);
    })
  }
}
