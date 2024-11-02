import { router } from "expo-router";
import { Text, View, Button } from "react-native";

export default function SignIn() {
  const handleNavigateAuth = () => {
    router.dismissAll()
    router.replace("/auth")
  };

  return (
    <View className="flex flex-1 justify-center items-center">
      <Text>TELA 3</Text>

      <Button title="Finalizar Onboarding" onPress={handleNavigateAuth} />
    </View>
  );
}
