import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CoolButton from "../../components/button/cool-button";
import { decrement, increment } from "./counterSlice";

const Counter: FC = () => {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return <>
    <p>
      Clicked: <span className="text-2xl">{count}</span> times.
    </p>
    <p className="mt-2">
      <CoolButton onClick={() => dispatch(increment())}>
        +
      </CoolButton>
      <CoolButton onClick={() => dispatch(decrement())}>
        -
      </CoolButton>
      <CoolButton onClick={() => count % 2 !== 0 && dispatch(increment())}>
        Increment if odd
      </CoolButton>
      <CoolButton onClick={() => setTimeout(() => dispatch(increment()), 1000)}>
        Increment async
      </CoolButton>
    </p>
  </>
}

export default Counter
