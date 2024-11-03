import { Stack, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { AuthProvider } from "@/src/hooks/useAuth";
import "../styles/global.css";

export default function OnboardingLayout() {
  useEffect(() => {
    const getStorageData = async () => {
      const isOnboardingCompleted = await AsyncStorage.getItem(
        "@isOnboardingCompleted"
      );

      if (isOnboardingCompleted) router.replace("/auth");
    };

    getStorageData();
  }, [router]);

  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding/stepTwo" />
        <Stack.Screen name="onboarding/stepThree" />
      </Stack>
    </AuthProvider>
  );
}
