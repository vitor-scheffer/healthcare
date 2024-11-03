import { Text, View } from "react-native";
import { Button, ButtonType } from "@/src/components";
import { useAuth } from "@/src/hooks/useAuth";

export default function SignIn() {
  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn();
  };

  return (
    <View className="flex flex-1 items-center justify-center bg-white px-6">
      <Text>Tela de autenticação</Text>
      <Button title="Logar" type={ButtonType.primary} onPress={handleSignIn} />
    </View>
  );
}
