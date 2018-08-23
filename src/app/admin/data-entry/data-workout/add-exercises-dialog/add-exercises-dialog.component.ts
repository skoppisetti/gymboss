import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-exercises-dialog',
  templateUrl: './add-exercises-dialog.component.html',
  styleUrls: ['./add-exercises-dialog.component.css']
})
export class AddExercisesDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddExercisesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
  }

  save() {

  }

  close() {
    this.dialogRef.close();
  }
}
