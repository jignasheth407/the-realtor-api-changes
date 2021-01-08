import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-grid',
  templateUrl: './listing-grid.component.html',
  styleUrls: ['./listing-grid.component.css']
})
export class ListingGridComponent implements OnInit {

  constructor(private apidata : APIsService , private route : ActivatedRoute) {
   
    this.apidata.featuringlist().subscribe(data=>{
         console.log(data);
         this.featurelistdata = data;
    })

   }

   featurelistdata :any =[];

  ngOnInit(): void {
  }

}
