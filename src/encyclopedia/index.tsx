// 百科页面
import React from "react";
import Taro, { useDidShow } from '@tarojs/taro'
import { View } from "@tarojs/components";
import './index.less'

const Encyclopedia = () => {
  useDidShow(() => {
    Taro.hideLoading()
  });
  return (
    <View className="wrapper">
     百科
    </View>
  );
};

export default Encyclopedia;
