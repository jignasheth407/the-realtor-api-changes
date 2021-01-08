import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIsService {

  constructor(private http : HttpClient) { }

 featuringlist(){
    let url = "https://realtorapi.yellow-chips.com/realtor/1/featuredlisting/all";
    return this.http.get(url);
  }

  agentdetail(){
    let url = "https://realtorapi.yellow-chips.com/agents/1";
    return this.http.get(url);
  }

  searchMlsno(data){
     let url = "https://realtorapi.yellow-chips.com/realtor/1/mls/ReferenceNumber="+data;
     return this.http.get(url);
  }
  
}
