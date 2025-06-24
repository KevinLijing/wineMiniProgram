// 红酒
// 雪茄模块
import React, { useEffect } from "react";
import Taro from '@tarojs/taro'
import { View } from "@tarojs/components";

const EncyclopediaRedirect = () => {
  useEffect(() => {
     // 进入容器页就弹出全局 loading
     Taro.showLoading({
      title: '加载中...',
      mask: true
    })
    // 切换 Tab 时会触发 onShow，这里用 redirectTo 避免多层返回栈
    Taro.redirectTo({
      url: '/encyclopedia/pages/index'  // 指向子包页面路径
    })
  }, []);
  return (<View style={{ flex: 1 }} />
  );
};


export default EncyclopediaRedirect;