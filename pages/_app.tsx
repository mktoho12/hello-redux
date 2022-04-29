import { ReactElement } from "react"
import { AppPropsWithLayout } from "../definitions"
import DefaultLayout from "../components/layout/default-layout"
import '../styles/globals.css'

const getDefaultLayout = (page: ReactElement) =>
  <DefaultLayout>{page}</DefaultLayout>

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || getDefaultLayout

  return getLayout(<Component {...pageProps} />)
}

export default App
