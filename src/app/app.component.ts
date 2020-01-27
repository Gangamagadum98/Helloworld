import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:String = "Ganga";
  title = 'Helloworld';


  text = "we are learning angular";
  vowels = ["a","e","i","o","u"];

  watchh = 2000

  championFlag;
  colors = ["Red", "Green", "Blue"]

  products=[{name:"watch",price:1500},
            {name:"mobile",price:10000},
            {name:"shoes",price:2500}]

  
}
