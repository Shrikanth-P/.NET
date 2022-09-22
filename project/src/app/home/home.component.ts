import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isShowing : boolean = true;

  books = [
    {
    img : 'https://m.media-amazon.com/images/I/51b7XbfMIIL._AC_UY327_FMwebp_QL65_.jpg',
    name : 'Clean code',
    author : 'Robert C Martin',
    },
    {
    img : 'https://m.media-amazon.com/images/I/51yaxPX4BFL._AC_UY327_FMwebp_QL65_.jpg',
    name : 'Pragmatic programmer',
    author : 'David Thomas',
    },
  ]


}
