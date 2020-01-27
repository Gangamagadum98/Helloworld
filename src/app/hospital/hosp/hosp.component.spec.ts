import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospComponent } from './hosp.component';

describe('HospComponent', () => {
  let component: HospComponent;
  let fixture: ComponentFixture<HospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
