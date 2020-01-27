import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LampService {

  name="Ganga"

  details={
    name:"Geeta",
    age:22,
    from:'Bangalore'
  }
  constructor(private _http:HttpClient) { }

  getMethod(){
  let obsevable = this._http.get('https://jsonplaceholder.typicode.com/posts')
  return obsevable
  }

  sendMethod(){
    let data = {
      userId:123,
      title:"GOD"
    }
    let observable = this._http.post('https://jsonplaceholder.typicode.com/posts',data)
    return observable
  }

  updateMethod(){
    let data = {
      userId:123,
      title:"GOD"
    }
    return this._http.put("https://reqres.in/api/users",data)
    
  }

  deleteMethod(){
  return this._http.delete('https://reqres.in/api/users')
  }
}
