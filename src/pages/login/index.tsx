import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default function LoginPage() {
  const [barHeight, setBarHeight] = useState(0)

  useEffect(() => {
    const sys:any = Taro.getSystemInfoSync()
    setBarHeight(sys.statusBarHeight)  // 单位 px
  }, [])

  return (
    <View className='login-page'>
      <View
        className='custom-navbar'
        style={{ paddingTop: `${barHeight}px` }}
      >
        <Text className='nav-title'>登录/注册</Text>
      </View>
      <View className='page-body'>
        {/* … */}
        登陆页面
      </View>
    </View>
  )
}
