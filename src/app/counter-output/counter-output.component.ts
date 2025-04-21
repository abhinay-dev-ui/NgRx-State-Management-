import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe, CommonModule } from '@angular/common';
import { doubleCounter, selectCounter } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe, CommonModule]
})
export class CounterOutputComponent {
  count$:Observable<number>;
  doubleCount$:Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    this.count$ = this.store.select(selectCounter); // key is selected from the global store and is the same as the key in the reducer
    this.doubleCount$ = this.store.select(doubleCounter)
  }

}
