import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  // toggle for sidenav
  opened = true;

  constructor() { }

  ngOnInit(): void {
  }

}
