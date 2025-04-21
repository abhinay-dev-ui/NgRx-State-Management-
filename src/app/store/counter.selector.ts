import { createSelector } from "@ngrx/store";

export const selectCounter = (state:{counter : number}) => {
    return state.counter;
}

export const doubleCounter = createSelector(
    selectCounter,
    (state: number) =>{
        return state * 2;
    }
)


