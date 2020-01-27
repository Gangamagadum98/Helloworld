import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountReactiveComponent } from './account-reactive.component';

describe('AccountReactiveComponent', () => {
  let component: AccountReactiveComponent;
  let fixture: ComponentFixture<AccountReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
