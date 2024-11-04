import { Text, View, Image } from "react-native";
import { Button, ButtonType, Input } from "@/src/components";
import { useAuth } from "@/src/hooks/useAuth";
import Logo from "@/src/assets/icon_transparent.png";

export default function SignIn() {
  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn();
  };

  return (
    <View className="flex flex-1 items-center justify-center bg-white px-6">
      <Image source={Logo} className="w-52 h-52" />

      <Input placeholder="Digite seu e-mail" type="mail" />
      <Input placeholder="Digite sua senha" type="lock" />
      <Button
        title="Logar"
        type={ButtonType.primary}
        onPress={handleSignIn}
        style={{ marginTop: 32 }}
      />

      <View className="flex flex-row items-center justify-center mt-3">
        <Text>Ainda não possui uma conta?</Text>
        <Button title="Cadastre-se" type={ButtonType.inline} />
      </View>
    </View>
  );
}
