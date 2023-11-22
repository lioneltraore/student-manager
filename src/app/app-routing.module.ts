import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';


const routes: Route[] = [
  {
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: 'add-student',
    children: [
      {
        path: '',
        component: AddStudentComponent
      },
      {
        path: ':id',
        component: AddStudentComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'student-list',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
