import { Stack } from "expo-router";
import "../styles/global.css";
import { AuthProvider } from "../hooks/useAuth";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </AuthProvider>
  );
}
