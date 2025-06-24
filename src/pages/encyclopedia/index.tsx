import React, { useEffect } from "react";
import Taro from '@tarojs/taro'
import { View } from "@tarojs/components";

const EncyclopediaRedirect = () => {
  useEffect(() => {
     // 进入容器页就弹出全局 loading
     Taro.showLoading({
      title: '加载中...',
      mask: true
    });
    Taro.redirectTo({ url: '/encyclopedia/index' });
  }, []);
  return (<View style={{ flex: 1 }} />
  );
};

export default EncyclopediaRedirect;