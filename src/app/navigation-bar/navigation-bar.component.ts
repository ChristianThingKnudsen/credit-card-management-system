import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  title: any;
  constructor() {}

  ngOnInit(): void {
    this.title = 'Credit card management system';
  }
}
