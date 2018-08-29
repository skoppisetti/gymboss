import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';
import { WorkoutTileComponent } from './workout-tile/workout-tile.component';
import { ExerciseTileComponent } from './exercise-tile/exercise-tile.component';
import { WorkoutService } from './services/workout.service';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { TimerComponent } from './timer/timer.component';

import { environment } from '../environments/environment';
import { TestComponent } from './test/test.component';
import { DataEntryComponent } from './admin/data-entry/data-entry.component';
import { MaterialModule } from './material/material.module';
import { SidenavListComponent } from './navbar/sidenav-list/sidenav-list.component';
import { DataExerciseComponent } from './admin/data-entry/data-exercise/data-exercise.component';
import { DataWorkoutComponent } from './admin/data-entry/data-workout/data-workout.component';
import { DataRoutineComponent } from './admin/data-entry/data-routine/data-routine.component';
import { ExercisesSearchComponent } from './exercises-search/exercises-search.component';
import { AddExercisesDialogComponent } from './admin/data-entry/data-workout/add-exercises-dialog/add-exercises-dialog.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutTileComponent,
    ExerciseTileComponent,
    NavbarComponent,
    WorkoutDetailComponent,
    ExerciseDetailComponent,
    TimerComponent,
    TestComponent,
    DataEntryComponent,
    SidenavListComponent,
    DataExerciseComponent,
    DataWorkoutComponent,
    DataRoutineComponent,
    ExercisesSearchComponent,
    AddExercisesDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(AppRoutes.routeConfig),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [WorkoutService],
  entryComponents: [AddExercisesDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
