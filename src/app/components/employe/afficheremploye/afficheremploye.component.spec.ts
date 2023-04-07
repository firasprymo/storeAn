import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheremployeComponent } from './afficheremploye.component';

describe('AfficheremployeComponent', () => {
  let component: AfficheremployeComponent;
  let fixture: ComponentFixture<AfficheremployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheremployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheremployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
