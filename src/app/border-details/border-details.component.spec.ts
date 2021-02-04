import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderDetailsComponent } from './border-details.component';

describe('BorderDetailsComponent', () => {
  let component: BorderDetailsComponent;
  let fixture: ComponentFixture<BorderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
