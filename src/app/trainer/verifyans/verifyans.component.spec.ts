import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyansComponent } from './verifyans.component';

describe('VerifyansComponent', () => {
  let component: VerifyansComponent;
  let fixture: ComponentFixture<VerifyansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifyansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
