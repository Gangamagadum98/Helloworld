import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.css']
})
export class HorseComponent implements OnInit {


  @Input() ani

  constructor() { }

  ngOnInit() {
    console.log("horse recieved from animal")
    console.log(this.ani)
  }

}
