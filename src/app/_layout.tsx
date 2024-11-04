import { Slot, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { AuthProvider } from "@/src/hooks/useAuth";
import '@/src/styles/global.css';

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
      <Slot />
    </AuthProvider>
  );
}
