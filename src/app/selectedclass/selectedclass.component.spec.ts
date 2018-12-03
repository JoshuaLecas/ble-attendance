import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedclassComponent } from './selectedclass.component';

describe('SelectedclassComponent', () => {
  let component: SelectedclassComponent;
  let fixture: ComponentFixture<SelectedclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
