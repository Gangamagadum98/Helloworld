import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  name="Ganga"

  emp={
    name: "Hitesh",
    Id:34,
    desg:"SE"
    
  }

  constructor(private _http:HttpClient) { }

  getdata(){
    console.log("Inside get data")
    let observable = this._http.get("https://reqres.in/api/unknown")
    return observable
   
  }

  senddata(){
    let data ={
      name:"Vijay",
      job :"SE"
    }
    return this._http.post("https://reqres.in/api/users", data)
    }

    updatedata(){
      let data ={
        name:"Chaitra",
        job:"SE"
      }
      return this._http.put("https://reqres.in/api/users", data)
    }
  
    deletedata(){
    return this._http.delete("https://reqres.in/api/users")
    }
  
}
