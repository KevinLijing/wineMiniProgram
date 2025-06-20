import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'
import counterStore from './counter'

export const store = {
  counterStore
}
export type RootStore = typeof store

export const useStore = () => {
  const { store } = useContext(MobXProviderContext)
  return store as RootStore
}

export default store