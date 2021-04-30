import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSimpleComponent } from './student-simple.component';

describe('StudentSimpleComponent', () => {
  let component: StudentSimpleComponent;
  let fixture: ComponentFixture<StudentSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
