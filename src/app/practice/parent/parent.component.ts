import { Component, OnInit } from '@angular/core';
import { ParentService } from './parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
hi
  constructor(private _service:ParentService) { }

  details

  recieve(event){

    console.log(this.hi = event)
  }

  getdetail(){
   let observable = this._service.getdata()
   observable.subscribe((resp) => {
     console.log(resp['data'])
     this.details=resp['data']
   })

   
      
    
  }


  ngOnInit() {
    this.  getdetail()
      
  }

}
