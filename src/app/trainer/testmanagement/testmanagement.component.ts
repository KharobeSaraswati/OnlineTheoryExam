import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-testmanagement',
  templateUrl: './testmanagement.component.html',
  styleUrl: './testmanagement.component.css'
})
export class TestmanagementComponent {

  constructor(public http:HttpClient, public app:AppComponent)
{

}

  tests:any[]=[];
  load()
  {
    let url=this.app.baseurl+'giveTests';
    this.http.get(url).subscribe((data:any)=>
    {
        this.tests=data;
    });
  }

  name:string='';
  start:Date=new Date();
  end:Date=new Date();
  questionCount:number=0;
  passingCount:number=0;
  
  add()
  {
    let obj={
      "name" : this.name,
      "start" : this.start,
      "end" : this.end,
      "questionCount" : this.questionCount,
      "passingCount" : this.passingCount,
    }

    let url=this.app.baseurl+'addTest';
    this.http.post(url,obj).subscribe((data:any)=>
    {
        this.tests.push(data);
    });
  }

  deleteTest(testId: number) {
    let url = this.app.baseurl + 'deleteTest/' + testId;
    this.http.get(url).subscribe((data: any) => {
      if (data === 1) {
        // Successfully deleted, find and remove the test from the tests array
        const index = this.tests.findIndex(test => test.id === testId);
        if (index !== -1) {
          this.tests.splice(index, 1);
        }
      } else if (data === 2) {
        // Test not found
        console.log('Test not found.');
      } else {
        // Error deleting test
        console.error('Error deleting test.');
      }
    });
  }
  
   

}
