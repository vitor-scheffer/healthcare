import { Onboarding } from "@/src/components";
import { router } from "expo-router";

import Undraw from "../assets/undraw_meditation.png";

export default function OnboardingOne() {
  return (
    <Onboarding
      image={Undraw}
      title="Passo 1"
      subtitle="Organize sua saúde de forma prática"
      footerTitle="Continuar"
      handleFooterBtn={() => router.navigate("/onboarding/stepTwo")}
    />
  );
}
