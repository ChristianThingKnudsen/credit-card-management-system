import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class TransactionOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Transaction overview on init!');
  }
}
