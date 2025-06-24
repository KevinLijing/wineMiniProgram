import React, { lazy, Suspense, useEffect } from "react";
import Taro from '@tarojs/taro'
import { View, Text } from "@tarojs/components";

const EncyclopediaRedirect = () => {

  useEffect(() => {
    console.log('===============================我们到百科了');
     // 进入容器页就弹出全局 loading
     Taro.showLoading({
      title: '加载中...',
      mask: true
    });
  }, []);
  return (
    <View className="page-body">
    <Suspense fallback={<Text>加载中…</Text>}>
    //此处加载子包的内容
    </Suspense>
  </View>
  );
};

export default EncyclopediaRedirect;