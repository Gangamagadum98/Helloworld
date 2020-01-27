import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  stud={
    name:"yadhav",
    age:12,
    color:"blacky"

  }

  constructor(private _http:HttpClient) { }

  getdata(){
  let obsevable = this._http.get("https://reqres.in/api/users?page=2")
  return obsevable
  }

  senddata(){

    let text={

      name:"nisha",
      age:13,
      color:"black"
    }

    return this._http.post("https://reqres.in/api/users",text)
  }

  updatedata(){
    let msg={
      name:"usha"
    }
    return this._http.put("https://reqres.in/api/users",msg)

  }

  deletedata(){

    return this._http.delete("https://reqres.in/api/users")
  }
}

