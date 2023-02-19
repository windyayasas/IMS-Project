import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { StudentComponent } from './pages/student/student.component';
import { MarksComponent } from './components/marks/marks.component';
import { MyAttendanceComponent } from './components/my-attendance/my-attendance.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AchievementsComponent,
    StudentComponent,
    MarksComponent,
    MyAttendanceComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NgbNavModule
  ]
})
export class StudentModule { }
