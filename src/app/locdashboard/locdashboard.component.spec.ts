import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocdashboardComponent } from './locdashboard.component';

describe('LocdashboardComponent', () => {
  let component: LocdashboardComponent;
  let fixture: ComponentFixture<LocdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocdashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
