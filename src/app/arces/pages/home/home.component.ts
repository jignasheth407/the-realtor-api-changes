import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private apidata : APIsService) {
  
    this.apidata.featuringlist().subscribe(data=>{
       this.featurelistdata = data;
       console.log(data)
    })
    
   }
   
   featurelistdata :any =[];
   

   

  ngOnInit(): void {
  }

}
