import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../student/student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  @Output() addStudentEvent = new EventEmitter<Student>();

  studentName?: string;
  studentAge?: number;
  studentLevel?: string;

  displayError = false;

  items: Student[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addStudent() {

    if(!this.studentName || !this.studentAge || !this.studentLevel) {
      this.displayError = true;

      setTimeout(() => {
        this.displayError = false
      }, 2000);

      return;
    }

    const newStudent: Student = {
      id: this.getId(),
      studentName: this.studentName,
      studentAge: this.studentAge,
      studentLevel: this.studentLevel
    }

    this.studentAge = undefined;
    this.studentLevel = undefined;
    this.studentName = undefined;

    this.addStudentEvent.emit(newStudent);
  }

  getId() {
    let idMax = 0;
    if(!this.items.length) {
      idMax += 1;
      return idMax;
    }
    this.items.forEach(student => {
      if(idMax < student.id) {
        idMax = student.id;
      }
    });
    idMax += 1;
    return idMax;
  }

}
