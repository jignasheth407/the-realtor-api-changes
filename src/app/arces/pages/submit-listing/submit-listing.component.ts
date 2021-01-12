import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-listing',
  templateUrl: './submit-listing.component.html',
  styleUrls: ['./submit-listing.component.css']
})
export class SubmitListingComponent implements OnInit {

  constructor(private http : APIsService ,  private router : Router ) { }

  ngOnInit(): void {
  }
    search=false;

   mlsnodata : any=[];
   errmsg : any ="";
  formSubmit(data:any ){
    var mlsno =  data.content;
    this.http.searchMlsno(mlsno).subscribe(data=>{
      this.mlsnodata = data;
      this.search=true;
    },(error)=>{
       alert("enter the proper input..!!");
       this.router.navigate(['/home']);
    })

  }
  
}
