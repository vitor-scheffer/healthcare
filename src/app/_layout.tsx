import { Stack, Redirect } from "expo-router";
import "../styles/global.css";
import { AuthProvider } from "../hooks/useAuth";

export default function RootLayout() {
  // const isFirstAccess = false;

  // if (!isFirstAccess) {
  //   return <Redirect href={"/auth"}/>
  // }

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </AuthProvider>
  );
}
