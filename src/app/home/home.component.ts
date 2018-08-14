import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout.service';
import { Workout } from '../models/workouts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  workouts: Workout[];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workoutService
      .getAllWorkouts()
      .subscribe(
        data => {
          console.log(data);
          this.workouts = data;
        },
        err => console.log(err),
        () => console.log('GetWorkouts() complete.')
      );
  }

}
