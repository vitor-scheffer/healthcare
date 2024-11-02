import { router, Stack } from "expo-router";
import { useAuth } from "@/src/hooks/useAuth";
import { useEffect } from "react";

export default function AuthLayout() {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.replace("/tabBar");
    }
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen name="signUp" />
    </Stack>
  );
}
