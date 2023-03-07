import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [],
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'student',
    canActivate: [],
    loadChildren: () =>
      import('./modules/student/student.module').then((m) => m.StudentModule)
  },
  {
    path: 'teacher',
    canActivate: [],
    loadChildren: () =>
      import('./modules/teacher/teacher.module').then((m) => m.TeacherModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
