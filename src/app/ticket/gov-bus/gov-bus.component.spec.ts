import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovBusComponent } from './gov-bus.component';

describe('GovBusComponent', () => {
  let component: GovBusComponent;
  let fixture: ComponentFixture<GovBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
