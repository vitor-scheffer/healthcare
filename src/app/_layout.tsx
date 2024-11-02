import { Stack, useRouter } from "expo-router";
import "../styles/global.css";
import { AuthProvider } from "../hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Loading } from "../components";

export default function RootLayout() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getStorageData = async () => {
      const isOnboardingCompleted = await AsyncStorage.getItem(
        "@isOnboardingCompleted"
      );

      if (isOnboardingCompleted) router.replace("/auth");
    };

    getStorageData();
  }, [router]);

  if (isLoading) return <Loading />;

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </AuthProvider>
  );
}
