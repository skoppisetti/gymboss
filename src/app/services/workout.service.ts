import { Injectable } from '@angular/core';
import { Exercise, Routine, Workout } from '../models/workouts';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const workouts = [
  new Workout(
    {
      id: 1,
      name: 'My First Workout',
      type: 'HIIT',
      desc: 'Tailor made workout to target your upper body...',
      routine: [
        new Routine(
          {
            ex: new Exercise({id: 1, name: 'Pushups', desc: 'Pushups', tags: ['chest', 'core']}),
            reps: 10,
            duration: -1
          }),
        new Routine(
          {
            ex: new Exercise({id: 1, name: 'Pullups', desc: 'Pullups', tags: ['back', 'biceps']}),
            reps: 10,
            duration: -1
          }),
        new Routine(
          {
            ex: new Exercise({id: 1, name: 'Half Plank', desc: 'Half Plank', tags: ['core']}),
            reps: -1,
            duration: 2
          })
      ]
    }
  ),
  new Workout(
    {
      id: 2,
      name: 'Core Blaster',
      type: 'CORE',
      desc: 'Core blaster works your mid section to get you those chiseled abs',
      routine: [
        new Routine(
          {
            ex: new Exercise({id: 1, name: 'Leg Raises', desc: 'Leg Raises', tags: ['lower abs', 'quads']}),
            reps: 25,
            duration: -1
          }),
        new Routine(
          {
            ex: new Exercise({id: 1, name: 'Bicycle Kicks', desc: 'Bicycle Kicks', tags: ['abs']}),
            reps: 25,
            duration: -1
          }),
        new Routine(
          {
            ex: new Exercise({id: 1, name: 'Heels to Heaven', desc: 'Heels to Heaven', tags: ['upper abs']}),
            reps: 25,
            duration: -1
          })
      ]
    }
  )
];

@Injectable()
export class WorkoutService {

  constructor() { }

  getAllWorkouts() {
    return of(workouts);
  }

  getWorkout(id: number): Observable<Workout> {
    return this.getAllWorkouts().pipe (
      map(w => w.find(workout => workout.id === id))
    );
  }
}
