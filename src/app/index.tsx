import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tela de login</Text>
      <Link href={"/signOut"}> Ir para cadastro</Link>
      <Link href={"/(tabs)"}> Ir para Home</Link>
    </View>
  );
}
