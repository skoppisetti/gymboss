import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  items: Observable<any[]>;
  
  constructor(db: AngularFirestore) { 
    this.items = db.collection('workouts').valueChanges();
  }

  ngOnInit() {
  }

}
