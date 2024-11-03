import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export enum ButtonType {
  primary,
  secondary,
  inline,
}

type Props = TouchableOpacityProps & {
  title: string;
  type: ButtonType;
};

export function Button({ title, type, ...rest }: Props) {
  switch (type) {
    case ButtonType.inline:
      return (
        <TouchableOpacity
          className="py-5 px-2 bg-transparent"
          {...rest}
        >
          <Text className="text-indigo-500 font-medium text-center">
            {title}
          </Text>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity
          className="bg-indigo-500 py-4 w-full rounded-3xl"
          {...rest}
        >
          <Text className="text-center text-white font-medium">{title}</Text>
        </TouchableOpacity>
      );
  }
}
