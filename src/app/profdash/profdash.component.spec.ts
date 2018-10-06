import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfdashComponent } from './profdash.component';

describe('ProfdashComponent', () => {
  let component: ProfdashComponent;
  let fixture: ComponentFixture<ProfdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
