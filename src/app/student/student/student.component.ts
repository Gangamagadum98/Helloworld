import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studs

  Info

  constructor(private _service:StudentService) { }


  getdata(){
    let observable = this._service.getdata()
    observable.subscribe((resp)=>{
      console.log(resp['data']),
      this.Info=resp['data']
      console.log(this.Info)
      
    })

  }
  senddata(){
    this._service.senddata().subscribe((resp)=>{
      console.log(resp)
    })
  }

  updatedata(){
    this._service.updatedata().subscribe((resp)=>{
      console.log(resp)
    })
  }

  deletedata(){
    this._service.deletedata().subscribe((resp)=>{
      console.log(resp)
    })
  }

  ngOnInit() {

    this.studs=this._service.stud;
   
    
    this.getdata()
 
  }

}
