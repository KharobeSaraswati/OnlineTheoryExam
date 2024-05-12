import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { StudentComponent } from '../student.component';

@Component({
  selector: 'app-attempttest',
  templateUrl: './attempttest.component.html',
  styleUrl: './attempttest.component.css'
})
export class AttempttestComponent {

 constructor(public http:HttpClient, public app:AppComponent,public student:StudentComponent)
{

}
showIndex:number=-1;
load(i:number)
{
  this.showIndex=i;
}
update()
{
  let url=this.app.baseurl+'update'+this.student.logs[this.showIndex].id;
  this.http.post(url,this.student.logs[this.showIndex].answer).subscribe((data:any)=>
  {
      if(data==null)
      {
          window.alert('something is wrong');
      }
      else{
          window.alert('done');
      }
  })
}
submit()
{
  let url=this.app.baseurl+'submit'+this.student.logs[this.showIndex].id;
  this.http.get(url).subscribe((data:any)=>
  {
      if(data==null)
      {
        window.alert('something is wrong');
      }
      else
      {
          this.student.logs[this.showIndex].submit=1;
          window.alert('Done');
      }
  })
}

logout()
{
  this.app.isLoggedIn=0;
}

GoBack()
{
  
  this.student.whatToShow = 1;
}
}
