import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    TeacherComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
