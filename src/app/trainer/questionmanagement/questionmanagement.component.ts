import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-questionmanagement',
  templateUrl: './questionmanagement.component.html',
  styleUrl: './questionmanagement.component.css'
})
export class QuestionmanagementComponent {


constructor(public http:HttpClient, public app:AppComponent)
{

}

  questions:any[]=[];
  load()
  {
    let url=this.app.baseurl+'giveQuestions';
    this.http.get(url).subscribe((data:any)=>
    {
        this.questions=data;
    });
  }

  name:string='';
  add()
  {
    let url=this.app.baseurl+'addQuestion';
    this.http.post(url,this.name).subscribe((data:any)=>
    {
        this.questions.push(data);
    });
  }

}
