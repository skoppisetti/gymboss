import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

import { Exercise } from '../models/workouts';

@Component({
  selector: 'app-exercises-search',
  templateUrl: './exercises-search.component.html',
  styleUrls: ['./exercises-search.component.css']
})
export class ExercisesSearchComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['name', 'desc', 'tags'];
  dataSource: MatTableDataSource<Exercise>;
  exercises: Exercise[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  exerciseSearchForm = this.fb.group({
    searchField: [''],
  });

  constructor(private fb: FormBuilder, private db: AngularFirestore) { }

  ngOnInit() {
    console.log("OnInit()")
    // this.getAllExercises().subscribe((data) => setTimeout(() => this.exercises = data, 20));
    this.getAllExercises().subscribe((data) => {
      this.exercises = data;
      this.dataSource = new MatTableDataSource<Exercise>(data);
      console.log('Exercises', data);
    });
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit()")
    // this.dataSource = new MatTableDataSource<Exercise>(this.exercises);
  }

  getAllExercises(): Observable<Exercise[]> {
    return this.db.collection<Exercise>('exercises').valueChanges();
  }
}
