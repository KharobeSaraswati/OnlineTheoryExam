import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExamEasePro';

  isLoggedIn:number=0;
  userid:number=0;
  baseurl='http://65.0.32.103:8080/ExamEase/';
}
