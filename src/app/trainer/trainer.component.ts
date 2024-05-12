import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.css'
})
export class TrainerComponent {

  whatToShow:number=0;
  changeWhatToShow(num:number)
  {
    this.whatToShow=num
  }

  constructor(public app:AppComponent)
{

}
  logout()
  {
    this.app.isLoggedIn=0;
  }
}