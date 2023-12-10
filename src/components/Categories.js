import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { categoriesData } from "../constants";

export default function Categories() {
  return (
    <View className="space-y-5">
      <View className="flex-row justify-between items-center mx-5">
        <Text
          style={{ fontSize: widthPercentageToDP(4) }}
          className="font-semibold text-neutral-700"
        >
          Categories
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: widthPercentageToDP(4), color: theme.text }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="space-x-4"
      >
        {categoriesData.map((category, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-2"
            >
              <Image
                source={category.image}
                className="rounded-3xl"
                style={{
                  width: widthPercentageToDP(20),
                  height: widthPercentageToDP(20),
                }}
              />
              <Text className="text-neutral-700 font-medium">
                {category.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
