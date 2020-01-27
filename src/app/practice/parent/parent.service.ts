import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private _http:HttpClient) { }

  getdata(){
   let observable =  this._http.get("https://reqres.in/api/users?page=2")
   return observable
  }
}
