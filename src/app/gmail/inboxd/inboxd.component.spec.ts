import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxdComponent } from './inboxd.component';

describe('InboxdComponent', () => {
  let component: InboxdComponent;
  let fixture: ComponentFixture<InboxdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
