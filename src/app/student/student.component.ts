import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  whatToShow:number=1; //1-showTests  2-AttemptTest
  logs:any;
}
