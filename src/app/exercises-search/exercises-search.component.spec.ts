import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesSearchComponent } from './exercises-search.component';

describe('ExercisesSearchComponent', () => {
  let component: ExercisesSearchComponent;
  let fixture: ComponentFixture<ExercisesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
