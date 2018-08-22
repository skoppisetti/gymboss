import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRoutineComponent } from './data-routine.component';

describe('DataRoutineComponent', () => {
  let component: DataRoutineComponent;
  let fixture: ComponentFixture<DataRoutineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataRoutineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
