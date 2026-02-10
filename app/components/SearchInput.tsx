import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

type Props = {
  onPress?: () => void;
};

const SearchInput = ({ onPress }: Props) => {
  return (
    <View className="flex-1 flex-row gap-2 items-center rounded-full bg-red-600 p-2">
      <TouchableOpacity onPress={onPress}>
        <Image source={icons.search} />
      </TouchableOpacity>

      <TextInput
        placeholderTextColor="#FFFFFF"
        placeholder="Search here"
        onPress={onPress}
        onChange={() => {}}
        value=""
      />
    </View>
  );
};

export default SearchInput;
