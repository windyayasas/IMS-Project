import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRequestsComponent } from './student-requests.component';

describe('StudentRequestsComponent', () => {
  let component: StudentRequestsComponent;
  let fixture: ComponentFixture<StudentRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
