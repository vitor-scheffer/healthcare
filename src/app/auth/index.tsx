import { Text, View, Button } from "react-native";
import { useAuth } from "@/src/hooks/useAuth";

export default function SignIn() {
  const { signIn } = useAuth();
  const handleSignIn = () => {
    signIn();
  };

  return (
    <View className="flex flex-1 justify-center items-center">
      <Text>Tela de autenticação</Text>
      <Button title="Login" onPress={handleSignIn} />
    </View>
  );
}
