import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateBusComponent } from './private-bus.component';

describe('PrivateBusComponent', () => {
  let component: PrivateBusComponent;
  let fixture: ComponentFixture<PrivateBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
