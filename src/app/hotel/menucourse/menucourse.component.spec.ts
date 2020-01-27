import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucourseComponent } from './menucourse.component';

describe('MenucourseComponent', () => {
  let component: MenucourseComponent;
  let fixture: ComponentFixture<MenucourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
