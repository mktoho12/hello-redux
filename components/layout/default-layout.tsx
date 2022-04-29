import Head from "next/head";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>

const DefaultLayout: FC<Props> = ({ children }) => <>
  <Head>
    <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
  </Head>

  {children}
</>

export default DefaultLayout
