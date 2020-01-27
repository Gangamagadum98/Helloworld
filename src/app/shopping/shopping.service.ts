import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  category="Tshirt"

  shop={
    cat:'T',
    gender:'F',
    brand:'L'
  }

  constructor(private _http:HttpClient) { }

  getdata(){
    console.log("inside getdata")
   let observable= this._http.get('https://reqres.in/api/users?page=2')
   return observable
   
}

sendData(){
  let emp = {
    name:"Ganga",
    job:"SE"
  
  }
  let observable = this._http.post("https://reqres.in/api/users",emp)
  return observable
}

updatedata(){
  let emp = {
    name:"chaitra",
    job:"SSE"
}
return this._http.post("https://reqres.in/api/users",emp)

}

deletedata(){

  
return this._http.delete("https://reqres.in/api/users")

}


}
