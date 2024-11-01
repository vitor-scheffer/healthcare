import { Stack } from "expo-router";
import '../styles/global.css'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Login" }}
      />
      <Stack.Screen name="signOut" options={{ title: "Cadastro" }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
