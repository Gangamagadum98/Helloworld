import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  category

  shop

  Employees

  constructor(private _service:ShoppingService) { }

  // get the data from API

  getdata(){

    let observable = this._service.getdata()
    observable.subscribe((resp) => 
    {console.log(resp['data']),
    this.Employees= resp['data']
  }

    )
  }

  //Post data to API
  
  senddata(){
    this._service.sendData().subscribe((resp)=>
    {console.log(resp)}
    )
  }

  // Updating the existing data

  updatedata(){
    this._service.updatedata().subscribe((resp)=>
    {console.log(resp)}
    )
  

  }

  // Deleting the existing data

  deletedata(){
    this._service.deletedata().subscribe((resp)=>
    {console.log(resp)}
    )

  }


  ngOnInit() {
   this.category= this._service.category
    console.log(this._service.shop.cat)
    this.shop=this._service.shop
    
    
    
  console.log(this.Employees)
  this.getdata();
  }
  


}
