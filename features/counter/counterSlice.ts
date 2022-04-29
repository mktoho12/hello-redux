import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from "../../app/store"

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => { state.value++ },
    decrement: state => { state.value-- },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const selectCount = (state: RootState) => state.counter.value
export default counterSlice.reducer
