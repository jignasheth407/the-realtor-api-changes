import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private apidata : APIsService) {

    this.userinfo = JSON.parse(localStorage.getItem('userdetails'));
    this.apidata.featuringlist().subscribe(data=>{
       this.featurelistdata = data;
       this.totalrecords = this.featurelistdata.length;
       console.log(data);
    })
    
   }
   
   featurelistdata :any =[];
   userinfo :any = [];
   totalrecords="";
   page = 1;

  ngOnInit(): void {
  }

  saveproperty(propertyid :any){
   console.log(propertyid);
   //saveprorperty in login
   if(this.userinfo == null){
     alert("To Save The Property Please Login..!!")
   }else{
    let obj = {
      id : 1,
      companyId : 1,
      userId : this.userinfo.id,
      referenceNumber : propertyid,
      propertyID : propertyid
    }
   this.apidata.addsavelist(obj).subscribe(data=>{
     alert("Property Saved..!")
   },error=>{
    alert("Something Went Wrong Property Not Saved..!")
  })
   }
  }

}
