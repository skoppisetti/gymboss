import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Workout } from '../models/workouts';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnInit {
   workout$: Observable<Workout>;
   workout: Workout;

  constructor(private workoutService: WorkoutService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.workout$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => 
          this.workoutService.getWorkout(+params.get('id'))
      )
    );
    this.workout$.subscribe(
      data => {
        console.log(data);
        this.workout = data;
      },
      err => console.log(err),
      () => console.log(`Done getting data`)
    );
    console.log('Initialized workout detail.')
  }

}
