import { HomeComponent } from './home/home.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';

export class AppRoutes {
    static routeConfig = [
        { path: '', component: HomeComponent },
        { path: 'workout/:id', component: WorkoutDetailComponent}
    ];
}