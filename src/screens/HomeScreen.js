import {
  SafeAreaView,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../components/Features';
import {dummyMessages} from '../constants';

export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
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
        {messages.length > 0 ? (
          <View space-y-2 flex-1>
            <Text
              style={{fontSize: wp(5)}}
              className="text-gray-700 font-semibold ml-1 py-4">
              Assistant
            </Text>
            <View
              style={{height: hp(58)}}
              className="bg-neutral-200 rounded-3xl p-4">
              <ScrollView
                bounces={false}
                className="space-y-4"
                showsVerticalScrollIndicator={false}>
                {messages.map((message, index) => {
                  if (message.role == 'assistant') {
                    if (message.content.includes('https')) {
                      // ai image
                      return (
                        <View key={index} className="flex-row justify-start">
                          <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                            <Image
                              source={{uri: message.content}}
                              className="rounded-2xl"
                              resizeMode="contain"
                              style={{width: wp(60), height: hp(60)}}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      return (
                        <View key={index}>
                          <View
                            style={{width: wp(70)}}
                            className="bg-emerald-100 rounded-xl p-2 rounded-tl-none">
                            <Text>{message.content}</Text>
                          </View>
                        </View>
                      );
                    }
                  } else {
                    // User Input
                    return (
                      <View key={index} className="flex-row justify-end">
                        <View
                          style={{width: wp(70)}}
                          className="bg-white rounded-xl p-2 rounded-tr-none">
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
        {/* recording, clear and stop buttons */}
        <View className="flex justify-center items-center">
          <TouchableOpacity>
            <Image
              className="rounded-full mt-5"
              source={require('../../assets/images/recordingIcon.png')}
              style={{width: hp(10), height: hp(10)}}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
