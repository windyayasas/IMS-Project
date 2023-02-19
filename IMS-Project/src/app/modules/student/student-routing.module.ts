import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { MarksComponent } from './components/marks/marks.component';
import { MyAttendanceComponent } from './components/my-attendance/my-attendance.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    outlet:'header'
  },
  {
    path: '',
    component: StudentComponent,
    children:[
      {
        path: '',
        redirectTo:'achievements',
        pathMatch:'full'
      },
      {
        path: 'achievements',
        component: AchievementsComponent
      },
      {
        path: 'marks',
        component: MarksComponent
      },
      {
        path: 'attendance',
        component: MyAttendanceComponent
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
