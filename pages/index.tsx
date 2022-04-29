import Head from 'next/head'
import { NextPageWithLayout } from "../definitions"
import Link from "next/link"

const HomePage: NextPageWithLayout = () => <>
  <Head>
    <title>Try Redux by mktoho.</title>
    <meta name="description" content="mktoho learn redux." />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main className="py-12 max-w-[1080px] mx-auto">
    <h1 className="text-center text-3xl">
      Try Redux by mktoho
    </h1>
    <ul>
      <li>
        <Link href="/basic">
          <a>
            Redux basic example
          </a>
        </Link>
      </li>
    </ul>
  </main>
</>

export default HomePage
