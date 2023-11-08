import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  studentName?: string;
  studentAge?: number;
  studentLevel?: string;

  constructor() { }

  ngOnInit(): void {
  }

  addStudent() {

  }

}
