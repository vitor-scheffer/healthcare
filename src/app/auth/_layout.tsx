import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/src/hooks/useAuth";
import { Loading } from "@/src/components";

export default function AuthLayout() {
  const { user, isLoading } = useAuth();

  if (!!user) {
    return <Redirect href={"/tabBar"} />;
  }

  if (isLoading) return <Loading />;

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Login", headerShown: false }}
      />
    </Stack>
  );
}
