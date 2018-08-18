import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { range, timer, interval } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  counter$: Observable<number>;
  counter: number = 0;
  @Input() duration: number;
  testVar = "Test var";
  // time = new Observable(
  //  observer => setInterval(() => observer.next(new Date().toString()), 1000)
  // );

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.startCountdown(params['duration']);
    });
  }

  startCountdown(dur: number) {
    console.log('Countdown is starting...');
    console.log(dur);
    // return 1;
    // range(1, dur)
    // .pipe(filter(x => x % 2 === 1), map(x => x + x))
    // .subscribe(x => console.log(x));

    /*const numbers = timer(1000, 1000);
    numbers.subscribe(x => {
      console.log(`Emitting: ${x}`);
      this.counter = x;
    })*/

    const source = interval(1000);
    const timer$ = timer(dur * 1000);
    const example = source.pipe(takeUntil(timer$));
    const subscibe = example.subscribe(val => {
      console.log(val);
      this.counter = val + 1;
    });
  }

}
