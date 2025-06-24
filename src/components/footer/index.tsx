import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

interface TabItem {
  icon: string
  selectedIcon: string
  label: string
  pagePath: string
}

const tabs: TabItem[] = [
  {
    icon: require('../../assets/imgs/tab/home.png'),
    selectedIcon: require('../../assets/imgs/tab/home-active.png'),
    label: '首页',
    pagePath: '/pages/home/index'
  },
  {
    icon: require('../../assets/imgs/tab/book.png'),
    selectedIcon: require('../../assets/imgs/tab/book-active.png'),
    label: '百科',
    pagePath: '/pages/encyclopedia/index'
  },
  {
    icon: require('../../assets/imgs/tab/scan.png'),
    selectedIcon: require('../../assets/imgs/tab/scan.png'),
    label: '',
    pagePath: '/pages/scan/index'
  },
  {
    icon: require('../../assets/imgs/tab/manage.png'),
    selectedIcon: require('../../assets/imgs/tab/manage-active.png'),
    label: '管理',
    pagePath: '/pages/management/index'
  },
  {
    icon: require('../../assets/imgs/tab/user.png'),
    selectedIcon: require('../../assets/imgs/tab/user-active.png'),
    label: '我的',
    pagePath: '/pages/mine/index'
  }
]

interface Props {
  active: number
  onChange: (i: number) => void
}

export default function Footer({ active, onChange }: Props) {

    const changeTabFun = (t: any, i: any) => {
        if (i === active) return
        onChange(i)  // 切换样式
        // TabBar 页必须用 switchTab
        Taro.switchTab({
          url: t.pagePath,
          fail: () => {
            // 如果不是 tabBar 声明的页，就用 navigateTo
            Taro.navigateTo({ url: t.pagePath })
          }
        })
    }

  return (
    <View className='custom-footer'>
      {tabs.map((t, i) => (
        <View
          key={i}
          className='footer-item'
          onClick={() => changeTabFun(t, i)}
        >
          <Image
            src={active === i ? t.selectedIcon : t.icon}
            className={i === 2 ? 'icon-large' : 'icon-small'}
          />
          {t.label && (
            <Text className={active === i ? 'txt-active' : 'txt'}>
              {t.label}
            </Text>
          )}
        </View>
      ))}
    </View>
  )
}
