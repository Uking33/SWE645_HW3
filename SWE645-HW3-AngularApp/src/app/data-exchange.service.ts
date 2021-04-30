import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Flags} from './models/Flags.model';
import {Data} from './models/data.model';

@Injectable()
export class DataExchangeService {
  private flags: Flags = new Flags();
  public data: Data = new Data();
  currentSurveyFlag = this.flags.SurveyFlag;
  currentStudentListFlag = this.flags.StudentListFlag;
  currentStudentNoFlag = this.flags.StudentNoFlag;
  currentStudentSimpleFlag = this.flags.StudentSimpleFlag;

  constructor() { }

  setSurveyFlag(): void {
    this.clearFlags();
    this.currentSurveyFlag = true;
  }
  setStudentListFlag(): void {
    this.clearFlags();
    this.currentStudentListFlag = true;
  }
  setStudentNoFlag(): void {
    this.clearFlags();
    this.currentStudentNoFlag = true;
  }
  setStudentSimpleFlag(): void {
    this.clearFlags();
    this.currentStudentSimpleFlag = true;
  }
  private clearFlags(): void{
    this.currentSurveyFlag = false;
    this.currentStudentListFlag = false;
    this.currentStudentNoFlag = false;
    this.currentStudentSimpleFlag = false;
  }
}
