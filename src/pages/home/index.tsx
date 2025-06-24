//首页
import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image, Button } from "@tarojs/components";
import { useEnv } from "taro-hooks";
import './index.less'
import TitleBar from "src/components/titleBar";
import Taro from "@tarojs/taro";
import Footer from "src/components/footer";

const Home = () => {
  const env = useEnv();
  const [tab, setTab] = useState(0)
  const [paddingTop, setPaddingTop] = useState<number>();
 
  
  useEffect(() => {
    const sysInfo = Taro.getSystemInfoSync();
    let statusBarHeight: any = sysInfo.statusBarHeight;
    setPaddingTop(statusBarHeight + 44)
  }, [])

  return (
    <View className="wrapper" style={{paddingTop: paddingTop}}>
      <TitleBar showLeftBack={true} title=""></TitleBar>
      <View> 测试以下了</View>
      <Footer active={tab} onChange={setTab}></Footer>
    </View>
  );
};

export default Home;
