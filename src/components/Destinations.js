import { Image, Text, TouchableOpacity, View } from "react-native";
import { destinationData } from "../constants";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Destinations() {
  const navigation = useNavigation();
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinationData.map((item, index) => {
        return (
          <DestinationCard navigation={navigation} item={item} key={index} />
        );
      })}
    </View>
  );
}

const DestinationCard = ({ item, navigation }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Destination", { ...item })}
      style={{
        width: widthPercentageToDP(42),
        height: widthPercentageToDP(65),
      }}
      className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
    >
      <Image
        source={item.image}
        style={{
          width: widthPercentageToDP(42),
          height: widthPercentageToDP(65),
          borderRadius: 20,
        }}
        className="absolute"
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,.8)"]}
        style={{
          width: widthPercentageToDP(42),
          height: heightPercentageToDP(15),
          borderRadius: 20,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0"
      />

      <TouchableOpacity
        onPress={() => setIsFavourite(!isFavourite)}
        style={{ backgroundColor: "rgba(255,255,255,.4)" }}
        className="absolute top-1 right-3 rounded-full p-3"
      >
        <HeartIcon
          size={widthPercentageToDP(7)}
          color={isFavourite ? "red" : "white"}
        />
      </TouchableOpacity>

      <Text
        style={{ fontSize: widthPercentageToDP(4) }}
        className="text-white font-semibold"
      >
        {item.title}
      </Text>
      <Text
        style={{ fontSize: widthPercentageToDP(2.5) }}
        className="text-white"
      >
        {item.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};
