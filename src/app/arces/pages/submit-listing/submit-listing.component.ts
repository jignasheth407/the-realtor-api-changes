import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service'

@Component({
  selector: 'app-submit-listing',
  templateUrl: './submit-listing.component.html',
  styleUrls: ['./submit-listing.component.css']
})
export class SubmitListingComponent implements OnInit {

  constructor(private http : APIsService) { }

  ngOnInit(): void {
  }
    search=false;

   mlsnodata : any=[];
  formSubmit(data:any ){
    var mlsno =  data.content;
    this.http.searchMlsno(mlsno).subscribe(data=>{
      this.mlsnodata = data;
      this.search=true;
    })

  }
  
}
