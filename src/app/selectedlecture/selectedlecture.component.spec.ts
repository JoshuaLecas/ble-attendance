import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedlectureComponent } from './selectedlecture.component';

describe('SelectedlectureComponent', () => {
  let component: SelectedlectureComponent;
  let fixture: ComponentFixture<SelectedlectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedlectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedlectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
