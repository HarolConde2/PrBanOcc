import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input () user: string | any; 
  @Input () position: string | any;

  constructor() { }

  ngOnInit(): void {
  }

}
