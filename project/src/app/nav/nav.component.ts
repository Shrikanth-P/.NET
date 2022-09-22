import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isdisabled : boolean = false;
  value = "";
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isdisabled!=this.isdisabled;
      alert("Click Event and property binding");
    }
}
