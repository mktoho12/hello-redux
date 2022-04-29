import Head from "next/head";
import { NextPageWithLayout } from "../definitions";
import Counter from "../features/counter/Counter";

const BasicPage: NextPageWithLayout = () => {
  return <>
    <Head>
      <title>Redux basic example</title>
    </Head>

    <main className="py-12 max-w-[640px] mx-auto">
      <h1 className="text-center text-3xl mb-6">
        Redux basic example!
      </h1>
      <section>
        <Counter/>
      </section>
    </main>
  </>
}

export default BasicPage
