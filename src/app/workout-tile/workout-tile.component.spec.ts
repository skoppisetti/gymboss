import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTileComponent } from './workout-tile.component';

describe('WorkoutTileComponent', () => {
  let component: WorkoutTileComponent;
  let fixture: ComponentFixture<WorkoutTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
