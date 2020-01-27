import { Component, OnInit } from '@angular/core';
import { LampService } from '../lamp.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-lamp',
  templateUrl: './lamp.component.html',
  styleUrls: ['./lamp.component.css']
})
export class LampComponent implements OnInit {

  naam
  detail
  data
  dats
  constructor(private _service:LampService) { }

  getMethod(){
  let observable =  this._service.getMethod()
  observable.subscribe((resp) =>{
    console.log(resp)
    this.data= resp
  })
  }

  sendmethod(){
    this._service.sendMethod().subscribe((resp) =>{
      console.log(resp)
      this.dats=resp
    })
  }

  updatemethod(){
    this._service.updateMethod().subscribe((resp)=>{
      console.log(resp)
    })
  }
  deletemethod(){
    this._service.deleteMethod().subscribe((resp)=>{
      console.log(resp)
    })
  }

  ngOnInit() {
    this.naam=this._service.name
    console.log(this.naam)

    this.detail = this._service.details
    this.getMethod()

  }

}
