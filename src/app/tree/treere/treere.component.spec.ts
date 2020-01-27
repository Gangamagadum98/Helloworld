import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreereComponent } from './treere.component';

describe('TreereComponent', () => {
  let component: TreereComponent;
  let fixture: ComponentFixture<TreereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
