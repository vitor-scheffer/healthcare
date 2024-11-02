import { Link, router } from "expo-router";
import { Text, View, Button } from "react-native";

export default function SignIn() {
  const handleNavigateHome = () => {
    router.replace("/tabBar")
  };

  return (
    <View className="flex flex-1 justify-center items-center">
      <Text>Tela de autenticação</Text>
      <Link href={"/auth/signUp"}> Ir para cadastro</Link>
      <Button title="Login" onPress={handleNavigateHome} />
    </View>
  );
}
