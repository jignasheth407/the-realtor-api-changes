import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   data1 : any = "";
  constructor(private http : APIsService ) {
     
   

  
        this.http.userprofile().subscribe(data=>{
      
        })
      
     
   
  }

  ngOnInit(): void {
  }

}
