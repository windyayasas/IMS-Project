import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { PrizegivingparentComponent } from './components/prizegivingparent/prizegivingparent.component';
import { ParentComponent } from './pages/parent/parent/parent.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { MarksComponent } from './components/marks/marks.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AttendanceComponent } from './components/attendance/attendance.component';


@NgModule({
  declarations: [
    PrizegivingparentComponent,
    ParentComponent,
    AchievementsComponent,
    MarksComponent,
    ProfileComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
