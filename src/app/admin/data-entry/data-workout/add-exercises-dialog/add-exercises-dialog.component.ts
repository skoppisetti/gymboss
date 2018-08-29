import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Exercise } from '../../../../models/workouts';

// import { Exercise } from '../../models/workouts';

@Component({
  selector: 'app-add-exercises-dialog',
  templateUrl: './add-exercises-dialog.component.html',
  styleUrls: ['./add-exercises-dialog.component.css']
})
export class AddExercisesDialogComponent implements OnInit {
  exercises: Exercise[];

  constructor(private dialogRef: MatDialogRef<AddExercisesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private db: AngularFirestore) { }

  ngOnInit() {
    this.getAllExercises().subscribe((data) => {
      this.exercises = data;
      console.log('Exercises', data);
    });
  }

  getAllExercises(): Observable<Exercise[]> {
    return this.db.collection<Exercise>('exercises').valueChanges();
  }

  save() {

  }

  close() {
    this.dialogRef.close();
  }
}
