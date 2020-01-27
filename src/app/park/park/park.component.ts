import { Component, OnInit } from '@angular/core';
import { ParkService } from '../park.service';

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.css']
})
export class ParkComponent implements OnInit {

  pm
  students
  info

  constructor(private _service:ParkService) { }

  getdata(){
    let observable = this._service.getdata()
    observable.subscribe((resp)=>{
      console.log(resp['data'])
      this.students=resp['data']
    })
  }

  senddata(){
  let observable = this._service.senddata().subscribe((xyz)=>{console.log(xyz)})
  this.info = observable
  }

  updatedata(){
    this._service.updatedata().subscribe((data)=>{console.log(data)})
  }

  deletedata(){
    this._service.deletedata().subscribe((resp)=>{console.log(resp)})
  }

  ngOnInit() {
    this.pm=this._service.park

    this.getdata()
  }



}
