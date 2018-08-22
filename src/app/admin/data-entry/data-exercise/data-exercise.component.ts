import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Component({
  selector: 'app-data-exercise',
  templateUrl: './data-exercise.component.html',
  styleUrls: ['./data-exercise.component.css']
})
export class DataExerciseComponent implements OnInit {
  exercises: AngularFireList<any[]>;
  exSetupForm = this.fb.group({
    name: ['', Validators.required],
    desc: ['', Validators.required],
    tags: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
    this.exercises = db.list('exercises');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Saving exercise data...', this.exSetupForm.value);
    this.exercises.push(this.exSetupForm.value);
  }

  onCancel() {
    this.exSetupForm.reset();
  }
}
