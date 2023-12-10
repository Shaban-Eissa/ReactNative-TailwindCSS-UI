import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import {
  ChevronLeftIcon,
  ClockIcon,
  HeartIcon,
  MapPinIcon,
  SunIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme";

export default function DestinationScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <View className="flex-1 bg-white">
      <Image
        source={item.image}
        style={{
          width: widthPercentageToDP(100),
          height: heightPercentageToDP(55),
        }}
      />
      <StatusBar style={"light"} />
      <SafeAreaView className="flex-row justify-between items-center w-full absolute mt-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-4"
          style={{ backgroundColor: "rgba(255,255,255,.5)" }}
        >
          <ChevronLeftIcon
            size={widthPercentageToDP(7)}
            strokeWidth={4}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFavourite(!isFavourite)}
          className="p-2 rounded-full mr-4"
          style={{ backgroundColor: "rgba(255,255,255,.5)" }}
        >
          <HeartIcon
            size={widthPercentageToDP(7)}
            strokeWidth={4}
            color={isFavourite ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="px-5 flex-1 justify-between bg-white pt-4 -mt-14"
      >
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
          <View className="flex-row justify-between items-start mt-5">
            <Text
              className="font-bold flex-1 text-netural-700"
              style={{ fontSize: widthPercentageToDP(6) }}
            >
              {item?.title}
            </Text>
            <Text
              className="font-semibold"
              style={{ fontSize: widthPercentageToDP(6), color: theme.text }}
            >
              {item?.price}
            </Text>
          </View>
          <Text
            style={{ fontSize: widthPercentageToDP(3.5) }}
            className="text-neutral-700 tracking-wide mb-2 "
          >
            {item?.longDescription}
          </Text>
          <View className="flex-row justify-between mx-1">
            <View className="flex-row space-x-2 items-start">
              <ClockIcon size={widthPercentageToDP(7)} color="skyblue" />
              <View className="flex space-y-2">
                <Text
                  style={{ fontSize: widthPercentageToDP(4.5) }}
                  className="font-bold text-neutral-700"
                >
                  {item.duration}
                </Text>
                <Text className="text-neutral-600 tracking-wide">Duration</Text>
              </View>
            </View>
            <View className="flex-row space-x-2 items-start">
              <MapPinIcon size={widthPercentageToDP(7)} color="#f87171" />
              <View className="flex space-y-2">
                <Text
                  style={{ fontSize: widthPercentageToDP(4.5) }}
                  className="font-bold text-neutral-700"
                >
                  {item.distance}
                </Text>
                <Text className="text-neutral-600 tracking-wide">Distance</Text>
              </View>
            </View>
            <View className="flex-row space-x-2 items-start">
              <SunIcon size={widthPercentageToDP(7)} color="orange" />
              <View className="flex space-y-2">
                <Text
                  style={{ fontSize: widthPercentageToDP(4.5) }}
                  className="font-bold text-neutral-700"
                >
                  {item.weather}
                </Text>
                <Text className="text-neutral-600 tracking-wide">Sunny</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={{
            backgroundColor: theme.bg(0.7),
            height: widthPercentageToDP(15),
            width: widthPercentageToDP(50),
          }}
          className="rounded-full flex justify-center items-center mx-auto mb-6"
        >
          <Text
            className="text-white font-bold"
            style={{ fontSize: widthPercentageToDP(5.5) }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
