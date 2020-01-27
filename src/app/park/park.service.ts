import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  park={
    name:"netaji",
    area:"rajaji",
    open:true
  }

  constructor(private _http:HttpClient) { }

  //get data
  getdata(){
    console.log("Inside get data")
   
    let observable = this._http.get("https://reqres.in/api/unknown")
    return observable
  }

  senddata(){

    let parks={
      email:"sanvi@reqres.in",
      password:"67890",
      job:"SE"

    }

    console.log("Inside send data")
    return this._http.post("https://reqres.in/api/users",parks)
  }
  updatedata(){
    let data={
      name:"vijay",
      un:"vijja",
      pwd:"78989"

    }
    console.log("inside update")
    return this._http.put("https://reqres.in/api/users",data)
  }

  deletedata(){
   return this._http.delete("https://reqres.in/api/users")
  }
}
