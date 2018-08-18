import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';
import { WorkoutTileComponent } from './workout-tile/workout-tile.component';
import { WorkoutService } from './services/workout.service';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { TimerComponent } from './timer/timer.component';

import { environment } from '../environments/environment';
import { TestComponent } from './test/test.component';
import { DataEntryComponent } from './admin/data-entry/data-entry.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutTileComponent,
    NavbarComponent,
    WorkoutDetailComponent,
    ExerciseDetailComponent,
    TimerComponent,
    TestComponent,
    DataEntryComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    RouterModule.forRoot(AppRoutes.routeConfig),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
