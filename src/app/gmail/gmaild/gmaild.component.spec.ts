import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmaildComponent } from './gmaild.component';

describe('GmaildComponent', () => {
  let component: GmaildComponent;
  let fixture: ComponentFixture<GmaildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmaildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
