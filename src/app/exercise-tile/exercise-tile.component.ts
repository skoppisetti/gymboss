import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../models/workouts';

@Component({
  selector: 'app-exercise-tile',
  templateUrl: './exercise-tile.component.html',
  styleUrls: ['./exercise-tile.component.css']
})
export class ExerciseTileComponent implements OnInit {
 @Input() exerciseTitle = '';
 @Input() exercise: Exercise = null;

  constructor() { }

  ngOnInit() {
  }

}
