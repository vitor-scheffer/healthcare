import { Stack, router } from "expo-router";
import { Button } from "react-native";
import { useAuth } from "@/src/hooks/useAuth";

export default function HomeLayout() {
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => <Button title="Sair" onPress={handleLogout} />,
        }}
      />
      <Stack.Screen name="remuneration" />
    </Stack>
  );
}
