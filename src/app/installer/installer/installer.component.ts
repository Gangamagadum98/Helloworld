import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-installer',
  templateUrl: './installer.component.html',
  styleUrls: ['./installer.component.css']
})
export class InstallerComponent implements OnInit {

  constructor(private _router:Router) { }

  navigateToInstad(){
    this._router.navigate(["/instad"])

  }

  ngOnInit() {
  }

}
