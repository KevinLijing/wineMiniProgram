import React, { ReactNode, useEffect, useState } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'
import back from '../../assets/imgs/back.png'

interface TitleBarProps {
  title?: string // 标题文字
  customCenter?: ReactNode // 中间自定义节点
  showLeftBack?: boolean // 是否显示默认返回按钮
  customLeft?: ReactNode // 左侧自定义节点，优先级高于 showLeftBack
  customRight?: ReactNode // 右侧自定义节点
  onBack?: () => void // 返回点击回调
}

const TitleBar: React.FC<TitleBarProps> = ({
  title,
  customCenter,
  showLeftBack = false,
  customLeft,
  customRight,
  onBack
}) => {
  const [styleData, setStyleData] = useState({ paddingTop: 0 })

  useEffect(() => {
    const sys = Taro.getSystemInfoSync()
    const statusBarHeight = sys.statusBarHeight || 0
    setStyleData({
      paddingTop: statusBarHeight
    })
  }, [])

  const handleBack = () => {
    if (onBack) onBack()
    else Taro.navigateBack()
  }

  const renderLeft = () => {
    if (customLeft) {
      return customLeft
    }
    if (showLeftBack) {
      return <Image className='tb-back' src={back} onClick={handleBack} />
    }
    return null
  }

  const renderCenter = () => {
    if (customCenter) return customCenter
    if (title) return <Text className='tb-title'>{title}</Text>
    return null
  }

  return (
    <View
      className='title-bar'
      style={{ paddingTop: styleData.paddingTop }}
    >
      <View className='tb-left'>{renderLeft()}</View>
      <View className='tb-center'>{renderCenter()}</View>
      <View className='tb-right'>{customRight}</View>
    </View>
  )
}

export default TitleBar
