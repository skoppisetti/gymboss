import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataExerciseComponent } from './data-exercise.component';

describe('DataExerciseComponent', () => {
  let component: DataExerciseComponent;
  let fixture: ComponentFixture<DataExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
