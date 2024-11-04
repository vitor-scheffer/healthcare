import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

type Props = TextInputProps & {
  type: "mail" | "lock";
  placeholder: string;
};

export function Input({ placeholder, type, ...rest }: Props) {
  const [passwordVisibility, setVisibility] = useState(true);

  return (
    <View className="flex flex-row items-center h-12 border-indigo-500 px-3 rounded-2xl border-b-2 mb-6 w-full">
      <Feather
        name={type}
        size={20}
        color={"#6366f1"}
        style={{ marginRight: 12 }}
      />
      <TextInput
        className="flex-1"
        placeholder={placeholder}
        inputMode={type === "mail" ? "email" : "text"}
        secureTextEntry={passwordVisibility}
        {...rest}
      />
      {type === "lock" && (
        <TouchableOpacity
          style={{ marginLeft: 12 }}
          onPress={() => setVisibility(!passwordVisibility)}
        >
          <Feather
            name={passwordVisibility ? "eye-off" : "eye"}
            size={20}
            color={"#6366f1"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
