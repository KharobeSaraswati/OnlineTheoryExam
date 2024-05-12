import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmanagementComponent } from './testmanagement.component';

describe('TestmanagementComponent', () => {
  let component: TestmanagementComponent;
  let fixture: ComponentFixture<TestmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestmanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
