import { Text, TouchableOpacity, View } from "react-native";
import { sortCategoryData } from "../constants";
import { useState } from "react";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { theme } from "../theme";

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState(sortCategoryData[1]);
  return (
    <View className="flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full p-2 px-4 space-x-2">
      {sortCategoryData.map((sort, index) => {
        let isActive = activeSort === sort;
        let activeButtonClass = isActive ? "bg-white shadow" : "";
        return (
          <TouchableOpacity
            onPress={() => setActiveSort(sort)}
            key={index}
            className={`p-3 px-4 rounded-full flex ${activeButtonClass}`}
          >
            <Text
              className="font-semibold"
              style={{
                fontSize: widthPercentageToDP(4),
                color: isActive ? theme.text : "rgba(0,0,0,.6)",
              }}
            >
              {sort}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
