import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { StudentComponent } from './pages/student/student.component';


@NgModule({
  declarations: [
    AchievementsComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
