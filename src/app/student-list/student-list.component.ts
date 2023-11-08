import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input('items') students: Student[] = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
