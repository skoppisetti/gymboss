import { HomeComponent } from './home/home.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { TimerComponent } from './timer/timer.component';
import { TestComponent } from './test/test.component';
import { DataEntryComponent } from './admin/data-entry/data-entry.component';

export class AppRoutes {
    static routeConfig = [
        { path: '', component: HomeComponent },
        { path: 'workout/:id', component: WorkoutDetailComponent},
        { path: 'timer/:duration', component: TimerComponent},
        { path: 'test', component: TestComponent},
        { path: 'data', component: DataEntryComponent}
    ];
}
