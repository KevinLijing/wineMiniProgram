import { FC } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer } from 'mobx-react'
import { useStore } from '../../store'
import './index.less'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

interface Index {
  props: PageStateProps;
}

const Index: FC = () => {
  const { counterStore } = useStore();
  const increment = () => {
    counterStore.increment()
  }

  const decrement = () => {
    counterStore.decrement()
  }

  const incrementAsync = () => {
    counterStore.incrementAsync()
  }

  return (
    <View className='index'>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>Add Async</Button>
      <Text>{counterStore.counter}</Text>
    </View>
  )
}

export default observer(Index)
