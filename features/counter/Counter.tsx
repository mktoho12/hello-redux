import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CoolButton from "../../components/button/cool-button";
import { decrement, increment, incrementAsync, incrementByAmount } from "./counterSlice";

const Counter: FC = () => {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const [amount, setAmount] = useState(0)

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
      <input type="number" value={amount} onChange={e => setAmount(parseInt(e.target.value))}/>
      <CoolButton onClick={() => dispatch(incrementByAmount(amount))}>
        +
      </CoolButton>
      <CoolButton onClick={() => dispatch(incrementAsync(amount))}>
        Async increment by amount
      </CoolButton>
    </p>
    <p>
      {JSON.stringify(incrementByAmount(5))}
    </p>
  </>
}

export default Counter
