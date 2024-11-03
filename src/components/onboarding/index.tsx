import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Text,
} from "react-native";
import { Button, ButtonType } from "../button";

type Props = {
  hasHeader?: boolean;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  footerTitle: string;
  handleFooterBtn: () => void;
};

export function Onboarding({
  hasHeader,
  image,
  title,
  subtitle,
  footerTitle,
  handleFooterBtn,
}: Props) {
  return (
    <View className="flex flex-1 items-center justify-center px-8 bg-white">
      {hasHeader && (
        <TouchableOpacity
          className={
            "bg-white h-12 w-12 rounded-2xl absolute top-20 left-4 items-center justify-center"
          }
          onPress={() => router.back()}
        >
          <Feather name="chevron-left" color={"blue"} size={20} />
        </TouchableOpacity>
      )}

      <Image
        source={image}
        className="flex w-80 h-80 self-center justify-self-center"
      />

      <Text className="text-indigo-500 font-semibold mt-28 text-3xl">
        {title}
      </Text>
      <Text className="mt-2 font-light text-sm">{subtitle}</Text>

      <Button
        title={footerTitle}
        type={ButtonType.inline}
        onPress={handleFooterBtn}
        style={{position: "absolute", right: 32, bottom: 32}}
      />
    </View>
  );
}
