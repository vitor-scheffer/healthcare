import { router } from "expo-router";
import { Text, View, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingThree() {
  const handleNavigateAuth = () => {
    AsyncStorage.setItem('@isOnboardingCompleted', 'true');
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
