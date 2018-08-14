import { Component, OnInit, Input } from '@angular/core';
import { Exercise, Routine } from '../models/workouts';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {
  @Input() routine: Routine;

  constructor() { }

  ngOnInit() {
  }

}
