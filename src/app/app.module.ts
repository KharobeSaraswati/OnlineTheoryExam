import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { TrainerComponent } from './trainer/trainer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TestmanagementComponent } from './trainer/testmanagement/testmanagement.component';
import { QuestionmanagementComponent } from './trainer/questionmanagement/questionmanagement.component';
import { VerifyansComponent } from './trainer/verifyans/verifyans.component';
import { ShowtestsComponent } from './student/showtests/showtests.component';
import { AttempttestComponent } from './student/attempttest/attempttest.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StudentComponent,
    TrainerComponent,
    TestmanagementComponent,
    QuestionmanagementComponent,
    VerifyansComponent,
    ShowtestsComponent,
    AttempttestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
