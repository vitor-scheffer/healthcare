import { Link, router } from "expo-router";
import { Text, View, Button } from "react-native";

export default function SignIn() {
  const handleNavigateOnboarding = () => router.replace("/onboarding");

  return (
    <View className="flex flex-1 justify-center items-center">
      <Text>Seja bem vindo!</Text>

      <Button title="Ir para onboarding" onPress={handleNavigateOnboarding} />
    </View>
  );
}
