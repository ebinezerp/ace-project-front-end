import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportImportSignupComponent } from './export-import-signup.component';

describe('ExportImportSignupComponent', () => {
  let component: ExportImportSignupComponent;
  let fixture: ComponentFixture<ExportImportSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportImportSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportImportSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
