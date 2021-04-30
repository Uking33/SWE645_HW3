import { Component, OnInit } from '@angular/core';
import { DataExchangeService } from '../data-exchange.service';

@Component({
  selector: 'app-student-simple',
  templateUrl: './student-simple.component.html',
  styleUrls: ['./student-simple.component.css']
})
export class StudentSimpleComponent implements OnInit {

  constructor(public data: DataExchangeService) { }

  ngOnInit(): void {
  }

}
