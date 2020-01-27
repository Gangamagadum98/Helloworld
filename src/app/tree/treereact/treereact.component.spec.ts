import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreereactComponent } from './treereact.component';

describe('TreereactComponent', () => {
  let component: TreereactComponent;
  let fixture: ComponentFixture<TreereactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreereactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreereactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
