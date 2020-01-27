import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallerdetailsComponent } from './installerdetails.component';

describe('InstallerdetailsComponent', () => {
  let component: InstallerdetailsComponent;
  let fixture: ComponentFixture<InstallerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallerdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
