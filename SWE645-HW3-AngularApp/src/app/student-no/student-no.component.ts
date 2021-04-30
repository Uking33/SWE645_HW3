import { Component, OnInit } from '@angular/core';
import { DataExchangeService } from '../data-exchange.service';

@Component({
  selector: 'app-student-no',
  templateUrl: './student-no.component.html',
  styleUrls: ['./student-no.component.css']
})
export class StudentNoComponent implements OnInit {

  constructor(public data: DataExchangeService) { }

  ngOnInit(): void {
  }

}
