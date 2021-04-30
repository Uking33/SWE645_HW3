import { Component, ElementRef, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {DataExchangeService} from '../data-exchange.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  url = 'http://52.87.158.5:4200/RestApi/api/insert';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'charset': 'UTF-8',
      'Access-Control-Allow-Origin': '*'
    })
  }

  constructor(private elRef:ElementRef, private http: HttpClient, public data: DataExchangeService) { }

  ngOnInit(): void {
  }
  tipping(content: String, title="Tipping"){
    //this.elRef.nativeElement.querySelector('#dialog').title = title;
    //this.elRef.nativeElement.querySelector('#dialog').innerHTML=content;
    alert(title + ":" + content);
  }
  
  //Form verify
  submit(data: any){
    //Like
    let arr = new Array();
    if(data.likedstudent)
      arr.push("student");
    if(data.likedlocation)
      arr.push("location");
    if(data.likedcampus)
      arr.push("campus");
    if(data.likedatmosphere)
      arr.push("atmosphere");
    if(data.likeddormrooms)
      arr.push("dormrooms");
    if(data.likedsports)
      arr.push("sports");
    data.liked = "";
		for (let i = 0; i < arr.length; i++) {
			data.liked+=arr[i];
			if(i!=arr.length-1)
        data.liked+=" & ";
    }
      
    if(!this.verify(data,arr)) return;
    //Post
    let that = this;
    this.http.post<any>(this.url, JSON.stringify(data), this.httpOptions).
    subscribe(
      response => {
        this.data.setStudentSimpleFlag();
      },
      error => {
        console.log(error);
      }
    );
  }
  verify(data: any, arr: Array<String>){
    let val;
    //uid
    val = data.uid;
    if(!this.checkContent(/^[a-zA-Z0-9_,\s]+$/,val)){
      this.tipping("The uid text box should contain only Alphabets.", "Verify");
      this.tipping("The uid text boxes should contain only appropriate numeric, alphabet or alphanumeric characters.", "Verify");
      return false;
    }
    //Name
    val = data.name;
    if(!this.checkContent(/^[a-zA-Z]+$/,val)){
      this.tipping("The Name text box should contain only Alphabets.", "Verify");
      return false;
    }
    //Address
    val = data.address;
    if(!this.checkContent(/^[a-zA-Z0-9_,\s]+$/,val)){
      this.tipping("The Address text boxes should contain only appropriate numeric, alphabet or alphanumeric characters.", "Verify");
      return false;
    }
    //??? Email (useless - html)
    val = data.email;
    if(!this.isEmail(val)){
      this.tipping("The Email address format should be valid.", "Verify");
      return false;
    }
    //Radio (useless - html)
    val = data.interested;
    if(!val){
      this.tipping("Make sure a radio button option is selected.", "Verify");
      return false;
    }
    //Checkboxes
    val = arr;
    if(val.length==0){
      this.tipping("Make sure checkboxes are checked.", "Verify");
      return false;
    }
    return true;
  }
  private checkContent(reg: RegExp, val: any){
      if(reg.test(val))
          return true;
      else
          return false;
  }
  private isEmail(strEmail: string) {
      if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
          return true;
      else
          return false;
  }
}
