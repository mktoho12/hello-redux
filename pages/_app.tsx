import { ReactElement } from "react"
import { Provider } from "react-redux"
import { AppPropsWithLayout } from "../definitions"
import DefaultLayout from "../components/layout/default-layout"
import store from "../app/store"
import '../styles/globals.css'

const getDefaultLayout = (page: ReactElement) =>
  <DefaultLayout>{page}</DefaultLayout>

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || getDefaultLayout

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}

export default App
