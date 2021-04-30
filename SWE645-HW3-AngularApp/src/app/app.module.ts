import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataExchangeService } from './data-exchange.service';
import { SurveyComponent } from './survey/survey.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentNoComponent } from './student-no/student-no.component';
import { StudentSimpleComponent } from './student-simple/student-simple.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    StudentListComponent,
    StudentNoComponent,
    StudentSimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
