import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  // @Input('items') students: Student[] = [
  // ];
  // @Output('onDelete') onDelete = new EventEmitter<Student>();
  // @Output('onUpdate') onUpdate = new EventEmitter<Student>();

  students: Student[] = [];

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.students = this.studentService.get();
  }

  // deleteStudent(item: Student) {
  //   this.onDelete.emit(item);
  // }

  // update(item: Student) {
  //   this.onUpdate.emit(item);
  // }

}
