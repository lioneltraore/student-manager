import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  studentName?: string;
  studentAge?: number;
  studentLevel?: string;

  items: Student[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addStudent() {

    const newStudent: Student = {
      id: this.getId(),
      studentName: this.studentName,
      studentAge: this.studentAge,
      studentLevel: this.studentLevel
    }

    console.log(newStudent);

    this.studentName += ' (Added)';

    /*
      - creation d'un etudiant [X]
      - attribution d'un id [X]
      - effacer les donnees du formulaire
      - ajouter l'etudiant au debut du tableau
    */
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
