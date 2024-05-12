import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { StudentComponent } from '../student.component';
@Component({
  selector: 'app-showtests',
  templateUrl: './showtests.component.html',
  styleUrl: './showtests.component.css'
})
export class ShowtestsComponent {

  tests:any;

  constructor(public http:HttpClient, public app:AppComponent,public student:StudentComponent)
  {
  
      let url=this.app.baseurl+'giveActiveTests';
      this.http.get(url).subscribe((data:any)=>
      {
          this.tests=data;
      });
  }

  
  attempt(testid:number)
  {
    let url=this.app.baseurl+'giveMeTestLogs'+this.app.userid+'and'+testid;
    this.http.get(url).subscribe((data:any)=>
    {
      this.student.logs=data;
      this.student.whatToShow=2;
    }
    );
  }

  logout()
{
  this.app.isLoggedIn=0;
}

  
}
