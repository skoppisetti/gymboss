import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { MatDialog, MatDialogConfig } from '@angular/material'
import { Exercise, Workout } from '../../../models/workouts';
import { Observable } from 'rxjs';
import { ExercisesSearchComponent } from '../../../exercises-search/exercises-search.component';
import { AddExercisesDialogComponent } from './add-exercises-dialog/add-exercises-dialog.component';

@Component({
  selector: 'app-data-workout',
  templateUrl: './data-workout.component.html',
  styleUrls: ['./data-workout.component.css']
})
export class DataWorkoutComponent implements OnInit {
  private workoutsCollection: AngularFirestoreCollection<Workout>;
  private workouts: Observable<Workout[]>;

  workoutSetupForm = this.fb.group({
    name: ['', Validators.required],
    desc: ['', Validators.required],
    tags: ['', Validators.required],
    exercises: this.fb.array([this.fb.control('')])
  });

  constructor(private fb: FormBuilder,
    private afs: AngularFirestore,
    private dialog: MatDialog) {
    this.workoutsCollection = afs.collection<Workout>('workouts');
    this.workouts = this.workoutsCollection.valueChanges();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Saving exercise data...', this.workoutSetupForm.value);
    // this.exercises.push(this.exSetupForm.value);
    this.workoutsCollection.add(this.workoutSetupForm.value);
  }

  onCancel() {
    this.workoutSetupForm.reset();
  }

  get exercises() {
    return this.workoutSetupForm.get('exercises') as FormArray;
  }

  addExercise() {
    this.exercises.push(this.fb.control(''));
  }

  addExDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddExercisesDialogComponent, dialogConfig);
  }
}
