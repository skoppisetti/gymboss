import { Injectable } from '@angular/core';
import { Exercise, Routine, Workout } from '../models/workouts';

const workouts = [
  new Workout(
    {
      id: 1, 
      name: "My First Workout", 
      type: "HIIT", 
      desc: "Tailor made workout to target your upper body...",
      routine: [
        new Routine(
          {
            ex: new Exercise({id: 1, name: "Pushups", desc: "Pushups", tags: ["chest","core"]}),
            reps: 10,
            duration: -1
          }),
        new Routine(
          {
            ex: new Exercise({id: 1, name: "Pullups", desc: "Pullups", tags: ["back","biceps"]}),
            reps: 10,
            duration: -1
          }),
        new Routine(
          {
            ex: new Exercise({id: 1, name: "Half Plank", desc: "Half Plank", tags: ["core"]}),
            reps: -1,
            duration: 2
          })
      ]
    }
  )
];

@Injectable()
export class WorkoutService {

  constructor() { }

  getAllWorkouts() {
    return workouts;
  }
}
