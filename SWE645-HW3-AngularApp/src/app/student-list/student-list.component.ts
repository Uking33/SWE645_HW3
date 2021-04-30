import {Component, OnInit} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {DataExchangeService} from '../data-exchange.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  //url = 'http://localhost:4200/RestApi/api/list';
  url = 'http://52.87.158.5:30000/RestApi/api/list';
  list: any;
  left: number | undefined;
  constructor(private http: HttpClient, public data: DataExchangeService) { }
  ngOnInit(): void {
    let that = this;
    this.http.get<String>(this.url,).subscribe(
      response => {
        that.list = response;
        if(that.list.length==0)
          that.data.setStudentNoFlag();
        else
          that.left = 10 - that.list.length;
      },
      error => {
        console.log(error);
      }
    );
  }
  counter() {
    return new Array(this.left);
  }
  search(data: any){
    let that = this;
    let str = "";
    if(data.uid != "")
      str = "?uid=" + data.uid;
    this.http.get<String>(this.url+str).subscribe(
      response => {
        that.list = response;
        if(that.list.length==0)
          that.data.setStudentNoFlag();
        else
          that.left = 10 - that.list.length;
      },
      error => {
        console.log(error);
      }
    );
  }
}
