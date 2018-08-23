import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Exercise } from '../../../models/workouts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-exercise',
  templateUrl: './data-exercise.component.html',
  styleUrls: ['./data-exercise.component.css']
})
export class DataExerciseComponent implements OnInit {
  // exercises: AngularFireList<any[]>;
  private exercisesCollection: AngularFirestoreCollection<Exercise>;
  private exercises: Observable<Exercise[]>;

  exSetupForm = this.fb.group({
    name: ['', Validators.required],
    desc: ['', Validators.required],
    tags: ['', Validators.required]
  });

  // constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
  constructor(private fb: FormBuilder, private afs: AngularFirestore) {
    // this.exercises = db.list('exercises');
    this.exercisesCollection = afs.collection<Exercise>('exercises');
    this.exercises = this.exercisesCollection.valueChanges();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Saving exercise data...', this.exSetupForm.value);
    // this.exercises.push(this.exSetupForm.value);
    this.exercisesCollection.add(this.exSetupForm.value);
  }

  onCancel() {
    this.exSetupForm.reset();
  }
}
