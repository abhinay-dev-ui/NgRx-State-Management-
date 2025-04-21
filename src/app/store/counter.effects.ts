import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { decrement, increment, init, set } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCounter } from "./counter.selector";

@Injectable()
export class CounterEffects {
    loadCount = createEffect(() =>
        this.actions$.pipe(
            ofType(init),
            switchMap(() => {
                const count = localStorage.getItem("count");
                if(count) {
                    return of(set({value: +count}))
                }
                return of(set({value: 0}))
            })
        )
    );

    saveCount = createEffect(() =>
        this.actions$.pipe(
            ofType(increment,decrement),
            withLatestFrom(this.store.select(selectCounter)),
            tap(([action, counter]) => {
                console.log(action);
                localStorage.setItem("count", counter.toString())
            })
        ), {dispatch: false}
    );

    constructor(private actions$: Actions, private store: Store<{counter:number}>) {}
}