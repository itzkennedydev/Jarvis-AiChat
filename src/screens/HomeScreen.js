import {SafeAreaView, Image, View, Text} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../components/Features';

export default function HomeScreen() {
  const [messages, setMessages] = useState([]);
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        {/* bot icon */}
        <View className="flex-row justify-center">
          <Image
            source={require('../../assets/images/bot.png')}
            style={{width: wp(20), height: hp(10)}}
          />
        </View>
        {/* features || messages */}
        {messages.length > 0 ? <View></View> : <Features />}
      </SafeAreaView>
    </View>
  );
}
