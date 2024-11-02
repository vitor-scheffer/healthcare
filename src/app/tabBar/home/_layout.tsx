import { Stack, router } from "expo-router";
import { Button } from "react-native";

export default function HomeLayout() {
  const handleLogout = () => {
    router.replace("/auth");
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
