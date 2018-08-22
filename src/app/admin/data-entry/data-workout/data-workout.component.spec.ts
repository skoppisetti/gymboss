import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWorkoutComponent } from './data-workout.component';

describe('DataWorkoutComponent', () => {
  let component: DataWorkoutComponent;
  let fixture: ComponentFixture<DataWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
