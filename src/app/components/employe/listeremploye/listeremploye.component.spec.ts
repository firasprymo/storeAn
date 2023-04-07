import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeremployeComponent } from './listeremploye.component';

describe('ListeremployeComponent', () => {
  let component: ListeremployeComponent;
  let fixture: ComponentFixture<ListeremployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeremployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeremployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
