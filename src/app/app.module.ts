import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';
import { WorkoutTileComponent } from './workout-tile/workout-tile.component';
import { WorkoutService } from './services/workout.service';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutTileComponent,
    NavbarComponent,
    WorkoutDetailComponent,
    ExerciseDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes.routeConfig)
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
