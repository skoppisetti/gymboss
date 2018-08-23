import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExercisesDialogComponent } from './add-exercises-dialog.component';

describe('AddExercisesDialogComponent', () => {
  let component: AddExercisesDialogComponent;
  let fixture: ComponentFixture<AddExercisesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExercisesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExercisesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
