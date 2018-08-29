import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTileComponent } from './exercise-tile.component';

describe('WorkoutTileComponent', () => {
  let component: ExerciseTileComponent;
  let fixture: ComponentFixture<ExerciseTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
