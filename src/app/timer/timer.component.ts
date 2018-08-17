import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  counter$: Observable<number>;
  counter: string;
  @Input() duration: number;
  time = new Observable(
    observer => setInterval(() => observer.next(new Date().toString()), 1000)
  );

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.startCountdown(params['duration']);
    });
  }

  startCountdown(dur: number) {
    console.log("Countdown is starting...")
    console.log(dur);
    // return 1;
  }

}
