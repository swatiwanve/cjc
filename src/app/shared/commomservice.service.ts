import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class CommomserviceService {
  

  constructor(private http:HttpClient) { }
   s:Student={
    id:0,
    name:'',
    uname:'',
    password:''
  }
  url:string="http://localhost:3000";
  getData()
  {
    return this.http.get(this.url);
  }
}
