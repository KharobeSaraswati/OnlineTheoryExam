import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-verifyans',
  templateUrl: './verifyans.component.html',
  styleUrl: './verifyans.component.css'
})
export class VerifyansComponent {

  logs:any;
  constructor(public http:HttpClient, public app:AppComponent)
{
  let url=this.app.baseurl+'getAllLogsForVerfication';
  this.http.get(url).subscribe((data:any)=>
  {
      if(data==null)
      {
          window.alert('something is wrong');
      }
      else if(data.length==0){
          window.alert('Nothing to show');
      }
      else{
        this.logs=data;
      }
  })
}
acceptreject(log:any, verify:number)
{
  let url=this.app.baseurl+'acceptreject'+log.id;
  this.http.post(url,verify).subscribe((data:any)=>
  {
      if(data==null || data==0)
      {
        window.alert('something is wrong');
      }
      else
      {
          let index=this.logs.indexOf(log);
          this.logs.splice(index,1);
      }
  })
}
}
