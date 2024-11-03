import { Onboarding } from "@/src/components";
import Undraw from "../../assets/undraw_personal.png";
import { router } from "expo-router";

export default function OnboardingTwo() {
  return (
    <Onboarding
      hasHeader={true}
      image={Undraw}
      title="Passo 2"
      subtitle="Organize sua saúde de forma prática"
      footerTitle="Continuar"
      handleFooterBtn={() => router.navigate("/onboarding/stepThree")}
    />
  );
}
