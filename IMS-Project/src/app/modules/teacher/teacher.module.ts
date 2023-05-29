import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentsComponent } from './components/students/students.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { StudentRequestsComponent } from './components/student-requests/student-requests.component';


@NgModule({
  declarations: [
    TeacherComponent,
    ProfileComponent,
    StudentsComponent,
    AttendanceComponent,
    StudentRequestsComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
