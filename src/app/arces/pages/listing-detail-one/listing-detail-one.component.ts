import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-detail-one',
  templateUrl: './listing-detail-one.component.html',
  styleUrls: ['./listing-detail-one.component.css']
})
export class ListingDetailOneComponent implements OnInit {

  constructor(private apidata : APIsService , private route : ActivatedRoute) { 
    this.apidata.featuringlist().subscribe(data=>{
       this.featurelistdata = data;
    })

    this.apidata.agentdetail().subscribe(agentdata=>{
      this.agentdetails = agentdata;
   })

   }

   featurelistdata :any =[];
   agentdetails : any = [];
   
   id :any ;

  ngOnInit(): void {
 
   this.id = this.route.snapshot.params.id;

  
  }

}
