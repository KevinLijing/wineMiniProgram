import { FC, PropsWithChildren } from 'react'
import { Provider } from 'mobx-react'

import store from './store'

import './app.less'

const App: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default App
