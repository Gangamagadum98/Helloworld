import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private _service:HomeService){}

getdata(){
  let obsevable = this._service.getdata()
    obsevable.subscribe((resp)=>{console.log(resp['data'])})
}
senddata(){
  let obsevable = this._service.senddata()
    obsevable.subscribe((resp)=>{console.log(resp)})
}
updatedata(){
  let obsevable = this._service.updatedata()
    obsevable.subscribe((resp)=>{console.log(resp)})
}
deletedata(){
  let obsevable = this._service.deletedata()
    obsevable.subscribe((resp)=>{console.log(resp)})
}

    
  
  
  ngOnInit() {

    this.getdata()
  }

}
