import { Component, OnInit, Input } from '@angular/core';
import { Workout } from '../models/workouts';

@Component({
  selector: 'app-workout-tile',
  templateUrl: './workout-tile.component.html',
  styleUrls: ['./workout-tile.component.css']
})
export class WorkoutTileComponent implements OnInit {
 @Input() workoutTitle = '';
 @Input() workout: Workout = null;

  constructor() { }

  ngOnInit() {
  }

}
