import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  list: Student[] = [
    // {
    //   studentName: 'Bob',
    //   studentAge: 24,
    //   studentLevel: 'IC1'
    // },
    // {
    //   studentName: 'Alex',
    //   studentAge: 22,
    //   studentLevel: 'IC2'
    // },
    // {
    //   studentName: 'Eric',
    //   studentAge: 24,
    //   studentLevel: 'IC3'
    // },
    // {
    //   studentName: 'Ali',
    //   studentAge: 20,
    //   studentLevel: 'RIT'
    // },
    // {
    //   studentName: 'Aicha',
    //   studentAge: 24,
    //   studentLevel: 'IC2'
    // },
    // {
    //   studentName: 'Stella',
    //   studentAge: 26,
    //   studentLevel: 'IC2'
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addStudent(newStudent: Student) {
    this.list.unshift(newStudent);
  }



}
