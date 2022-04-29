import Head from "next/head";
import { useEffect, useState } from "react";
import CoolButton from "../components/button/cool-button";
import { NextPageWithLayout } from "../definitions";
import { configureStore, createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    incremented: state => { state.value += 1 },
    decremented: state => { state.value -= 1 },
  },
})

const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer,
})

const BasicPage: NextPageWithLayout = () => {

  const [count, setCount] = useState(0)

  const updateCount = () => setCount(store.getState().value)
  useEffect(() => store.subscribe(updateCount), [])

  const dispatchIncremented = () => store.dispatch(incremented())
  const dispatchDecremented = () => store.dispatch(decremented())

  return <>
    <Head>
      <title>Redux basic example</title>
    </Head>

    <main className="py-12 max-w-[640px] mx-auto">
      <h1 className="text-center text-3xl mb-6">
        Redux basic example
      </h1>
      <section>
        <p>
          Clicked: <span className="text-2xl">{count}</span> times.
        </p>
        <p className="mt-2">
          <CoolButton onClick={dispatchIncremented}>
            +
          </CoolButton>
          <CoolButton onClick={dispatchDecremented}>
            -
          </CoolButton>
          <CoolButton onClick={() => count % 2 !== 0 && dispatchIncremented()}>
            Increment if odd
          </CoolButton>
          <CoolButton onClick={() => setTimeout(dispatchIncremented, 1000)}>
            Increment async
          </CoolButton>
        </p>
      </section>
    </main>
  </>
}

export default BasicPage
