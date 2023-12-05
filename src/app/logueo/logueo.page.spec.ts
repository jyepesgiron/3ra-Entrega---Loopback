import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogueoPage } from './logueo.page';

describe('LogueoPage', () => {
  let component: LogueoPage;
  let fixture: ComponentFixture<LogueoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogueoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
