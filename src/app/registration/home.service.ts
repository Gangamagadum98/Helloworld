import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http:HttpClient) { }

  getdata(){
    let observable = this._http.get("https://reqres.in/api/users/2")
    return observable;
  }

  senddata(){
    let data={
      name:"Swati",
      job:"software",
      id:"23"

    }
    let observable =this._http.post("https://reqres.in/api/users",data)
    return observable;
    
  }
  updatedata(){
    let data={
      name:"Swati",
      job:"software",
      id:"23"

    }
    let observable=this._http.put("https://reqres.in/api/users/2",data)
    return observable;
  }
  deletedata(){
    let observable=this._http.delete("https://reqres.in/api/users/2")
    return observable;
  }
}
