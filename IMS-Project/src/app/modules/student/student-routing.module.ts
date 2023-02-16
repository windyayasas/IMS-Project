import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    outlet:'header'
  },
  {
    path: '',
    component: StudentComponent
  },
  // {
  //   path: 'marks',
  //   component: StudentComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
