import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../student/student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  @Input('students') items: Student[] = [];
  @Input('currentStudent') currentStudent: Student | undefined;
  @Output() addStudentEvent = new EventEmitter<Student>();
  @Output() updateStudentEvent = new EventEmitter<Student>();

  studentName?: string;
  studentAge?: number;
  studentLevel?: string;

  displayError = false;



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

    // this.items.push(newStudent);
    this.addStudentEvent.emit(newStudent);
  }

  updateStudent() {
    console.log(this.currentStudent);
    if(!this.currentStudent?.studentName || !this.currentStudent?.studentAge || !this.currentStudent?.studentLevel) {
      this.displayError = true;

      setTimeout(() => {
        this.displayError = false
      }, 2000);

      return;
    }

    const data: Student = {...this.currentStudent};
    this.updateStudentEvent.emit(data);
    this.currentStudent = undefined;
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
