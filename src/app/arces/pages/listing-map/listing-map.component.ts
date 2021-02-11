import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { Router } from '@angular/router';
import { FormGroup , FormControl  } from '@angular/forms';

@Component({
  selector: 'app-listing-map',
  templateUrl: './listing-map.component.html',
  styleUrls: ['./listing-map.component.css']
})
export class ListingMapComponent implements OnInit {

  searchdata = new FormGroup({
    Mlsmo : new FormControl(''),
    cityname : new FormControl(''),
    minprice : new FormControl(''),
    maxprice :new FormControl(''),
    beds : new FormControl(''),
    bath : new FormControl(''),
    propertytype : new FormControl(''),

  })

  constructor(private http : APIsService ,  private router : Router ) {
    this.http.dropdowndata().subscribe(data=>{
      this.dropdowndata = data;
      //  console.log(data)
    })
    this.userinfo = JSON.parse(localStorage.getItem('userdetails'));
  }
 
  ngOnInit(): void {
    }
    
    dropdowndata :any =[];
    search=false;
    searchbyMlsno = false;
    dropstates = false;
    mlsresult:any = [];
    residential = "";
    commercial = "";
    dropdownsearchdetails : any =[];
    totalrecords="";
    page = 1;
    searchquerys(){
      if(this.searchdata.get('Mlsmo').value !== ""){
          this.search = true;
        this.searchbyMlsno = true; 
        this.http.searchMlsno(this.searchdata.get('Mlsmo').value).subscribe(data=>{
          this.mlsresult = data;
          this.totalrecords = this.mlsresult.length;
          // alert("working")
          // console.log(data)//empty value hai
         },error=>{
           alert("Somthing Went Wrong Try Later..!!");
         })
      }
  
      else if(this.searchdata.get('Mlsmo').value == "" && this.searchdata.get('cityname').value !== ""){
        this.dropstates=true;
  
         this.dropdowndata.forEach(element => {
  
           if(element.name == this.searchdata.get('cityname').value){
             if(this.residential !== ""){
  
              if(this.searchdata.get('beds').value !== ""){
                let dropsearchobj = {
                  Type: this.residential,
                  LatitudeMin:element.latitudeMin,
                  LongitudeMax:element.longitudeMax,
                  LongitudeMin:element.longitudeMin,
                  LatitudeMax:element.latitudeMax,
                  BedRange:this.searchdata.get('beds').value,
                  BathRange:this.searchdata.get('bath').setValue(0),
                 }
                 this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
                  console.log(data);
                  this.dropdownsearchdetails = data;
                  this.totalrecords =  this.dropdownsearchdetails.length;
                 },error=>{
                   console.log(error);
                 })
               }else if(this.searchdata.get('bath').value !== ""){
                let dropsearchobj = {
                  Type:this.residential,
                  LatitudeMin:element.latitudeMin,
                  LongitudeMax:element.longitudeMax,
                  LongitudeMin:element.longitudeMin,
                  LatitudeMax:element.latitudeMax,
                  BedRange:this.searchdata.get('beds').setValue(0),
                  BathRange:this.searchdata.get('bath').value,
                 }
                 this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
                  console.log(data);
                  this.dropdownsearchdetails = data;
                  this.totalrecords =  this.dropdownsearchdetails.length;
                 },error=>{
                   console.log(error)
                 })
               }else if (this.searchdata.get('beds').value !== "" && this.searchdata.get('bath').value !== ""){
                let dropsearchobj = {
                  Type: this.residential,
                  LatitudeMin:element.latitudeMin,
                  LongitudeMax:element.longitudeMax,
                  LongitudeMin:element.longitudeMin,
                  LatitudeMax:element.latitudeMax,
                  BedRange:this.searchdata.get('beds').value,
                  BathRange:this.searchdata.get('bath').value,
                 }
                 this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
                  console.log(data);
                  this.dropdownsearchdetails = data;
                  this.totalrecords =  this.dropdownsearchdetails.length;
                 },error=>{
                   console.log(error)
                 }) 
               }
               else{
                let dropsearchobj = {
                  Type:  this.residential,
                  LatitudeMin:element.latitudeMin,
                  LongitudeMax:element.longitudeMax,
                  LongitudeMin:element.longitudeMin,
                  LatitudeMax:element.latitudeMax,
                  BedRange:"0",
                  BathRange:0,
                 }
                 this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
                  console.log(data);
                  this.dropdownsearchdetails = data;
                  this.totalrecords =  this.dropdownsearchdetails.length;
                 },error=>{
                   console.log(error)
                 }) 
               }
  
        
             }else if ( this.commercial !== ""){
  
               if(this.searchdata.get('beds').value !== ""){
                let dropsearchobj = {
                  Type: this.commercial,
                  LatitudeMin:element.latitudeMin,
                  LongitudeMax:element.longitudeMax,
                  LongitudeMin:element.longitudeMin,
                  LatitudeMax:element.latitudeMax,
                  BedRange:this.searchdata.get('beds').value,
                  BathRange:this.searchdata.get('bath').setValue(0),
                 }
                 this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
                  console.log(data);
                  this.dropdownsearchdetails = data;
                  this.totalrecords =  this.dropdownsearchdetails.length;
                 },error=>{
                   console.log(error)
                 })
               }else if(this.searchdata.get('bath').value !== ""){
                let dropsearchobj = {
                  Type: this.commercial,
                  LatitudeMin:element.latitudeMin,
                  LongitudeMax:element.longitudeMax,
                  LongitudeMin:element.longitudeMin,
                  LatitudeMax:element.latitudeMax,
                  BedRange:this.searchdata.get('beds').setValue(0),
                  BathRange:this.searchdata.get('bath').value,
                 }
                 this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
                  console.log(data);
                  this.dropdownsearchdetails = data;
                  this.totalrecords =  this.dropdownsearchdetails.length;
                 },error=>{
                   console.log(error)
                 })
               }else if(this.searchdata.get('beds').value !== "" && this.searchdata.get('bath').value !== ""){
                let dropsearchobj = {
                  Type: this.commercial,
                  LatitudeMin:element.latitudeMin,
                  LongitudeMax:element.longitudeMax,
                  LongitudeMin:element.longitudeMin,
                  LatitudeMax:element.latitudeMax,
                  BedRange:this.searchdata.get('beds').value,
                  BathRange:this.searchdata.get('bath').value,
                 }
                 this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
                  console.log(data);
                  this.dropdownsearchdetails = data;
                  this.totalrecords =  this.dropdownsearchdetails.length;
                 },error=>{
                   console.log(error)
                 }) 
               }else{
                let dropsearchobj = {
                  Type: this.commercial,
                  LatitudeMin:element.latitudeMin,
                  LongitudeMax:element.longitudeMax,
                  LongitudeMin:element.longitudeMin,
                  LatitudeMax:element.latitudeMax,
                  BedRange:"0",
                  BathRange:0,
                 }
                 this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
                  console.log(data);
                  this.dropdownsearchdetails = data
                  this.totalrecords =  this.dropdownsearchdetails.length;
                 },error=>{
                   console.log(error)
                 }) 
               }
            
             }else{
               if(this.searchdata.get('beds').value !== ""){
                let dropsearchobj = {
                
                  Type:"residential",
                  CurrentPage:1,
                  LatitudeMin:"43.4728479",
                  LongitudeMax:"-79.5624177",
                  RecordsPerPage:5,
                  LongitudeMin:"-79.9624177",
                  LatitudeMax:"43.9928479",
                  BedRange:this.searchdata.get('beds').value,
                  BathRange:this.searchdata.get('bath').setValue(0),
                  NumberOfDays:0,
                  SortBy:0,
                  BuildingTypeId:0
                
                 }
                 this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
                  console.log(data);
                  this.dropdownsearchdetails = data;
                  this.totalrecords =  this.dropdownsearchdetails.length;
                 },error=>{
                   console.log(error)
                 })
               }
               else if(this.searchdata.get('bath').value !== ""){
                let dropsearchobj = {
                
                  Type:"residential",
                  CurrentPage:1,
                  LatitudeMin:"43.4728479",
                  LongitudeMax:"-79.5624177",
                  RecordsPerPage:5,
                  LongitudeMin:"-79.9624177",
                  LatitudeMax:"43.9928479",
                  BedRange:this.searchdata.get('beds').setValue(0),
                  BathRange:this.searchdata.get('bath').value,
                  NumberOfDays:0,
                  SortBy:0,
                  BuildingTypeId:0
                
                 }
                 this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
                  console.log(data);
                  this.dropdownsearchdetails = data;
                  this.totalrecords =  this.dropdownsearchdetails.length;
                 },error=>{
                   console.log(error)
                 })
               }else if(this.searchdata.get('beds').value !== "" && this.searchdata.get('bath').value !== ""){
                let dropsearchobj = {
                
                  Type:"residential",
                  CurrentPage:1,
                  LatitudeMin:"43.4728479",
                  LongitudeMax:"-79.5624177",
                  RecordsPerPage:5,
                  LongitudeMin:"-79.9624177",
                  LatitudeMax:"43.9928479",
                  BedRange:this.searchdata.get('beds').value,
                  BathRange:this.searchdata.get('bath').value,
                  NumberOfDays:0,
                  SortBy:0,
                  BuildingTypeId:0
                
                 }
                 this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
                  console.log(data);
                  this.dropdownsearchdetails = data;
                  this.totalrecords =  this.dropdownsearchdetails.length;
                 },error=>{
                   console.log(error)
                 })
               }else{
                let dropsearchobj = {
                
                  Type:"residential",
                  CurrentPage:1,
                  LatitudeMin:"43.4728479",
                  LongitudeMax:"-79.5624177",
                  RecordsPerPage:5,
                  LongitudeMin:"-79.9624177",
                  LatitudeMax:"43.9928479",
                  BedRange:"0",
                  BathRange:0,
                  NumberOfDays:0,
                  SortBy:0,
                  BuildingTypeId:0
                
                 }
                 this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
                  console.log(data);
                  this.dropdownsearchdetails = data;
                  this.totalrecords =  this.dropdownsearchdetails.length;
                 },error=>{
                   console.log(error)
                 })
               }
           
             }
           }
         });
  
      }
      else if(this.searchdata.get('Mlsmo').value == "" && this.searchdata.get('cityname').value == ""){
       alert("NO Empty Input Allowed..!!")
      }
    }
    
    resi(){
     this.residential = "residential";
    }
  
    com(){
      this.commercial = "commercial";
     }
      
     userinfo :any = [];

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
      this.http.addsavelist(obj).subscribe(data=>{
        alert("Property Saved..!")
      },error=>{
       alert("Something Went Wrong Property Not Saved..!")
     })
      }
     }
}
