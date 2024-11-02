import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text>TELA 2 DO ONBOARDING</Text>

      <Link href={"/onboarding/stepThree"} className="bg-blue-600 text-white py-1 px-2 rounded-2xl mt-2">Continuar</Link>
    </View>
  );
}
