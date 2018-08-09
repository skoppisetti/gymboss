import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';
import { WorkoutTileComponent } from './workout-tile/workout-tile.component';
import { WorkoutService } from './services/workout.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutTileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes.routeConfig)
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
