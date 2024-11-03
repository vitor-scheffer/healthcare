import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Onboarding } from "@/src/components";
import Undraw from "../../assets/undraw_med.png";

export default function OnboardingThree() {
  const handleNavigateAuth = () => {
    AsyncStorage.setItem("@isOnboardingCompleted", "true");
    router.dismissAll();
    router.replace("/auth");
  };

  return (
    <Onboarding
      hasHeader={true}
      image={Undraw}
      title="Passo 3"
      subtitle="Organize sua saúde de forma prática"
      footerTitle="Finalizar"
      handleFooterBtn={handleNavigateAuth}
    />
  );
}
