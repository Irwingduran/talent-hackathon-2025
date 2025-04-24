
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building2, LineChart, Wallet } from "lucide-react";

const OnboardingPyme = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "¿Listo para tomar control de tus impuestos?",
      icon: <Building2 className="w-24 h-24 text-[#00d09e]" />,
      description: "Bienvenido a tu asistente fiscal inteligente"
    },
    {
      title: "Automatiza tus Obligaciones Fiscales",
      icon: <Wallet className="w-24 h-24 text-[#00d09e]" />,
      description: "Mantén tu negocio al día con el SAT"
    },
    {
      title: "Analiza tu Situación Financiera",
      icon: <LineChart className="w-24 h-24 text-[#00d09e]" />,
      description: "Visualiza y mejora tu salud financiera"
    }
  ];

  const handleNext = () => {
    if (step === slides.length - 1) {
      navigate("/dashboard/pyme");
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#00d09e] flex items-center justify-center">
      <div className="w-full max-w-md bg-card rounded-t-3xl mt-auto min-h-[70vh] p-8 relative">
        <div className="text-center mb-8 flex flex-col items-center justify-center gap-6">
          <h1 className="text-2xl font-semibold text-foreground mb-4">
            {slides[step].title}
          </h1>
          <div className="p-6 bg-[#00d09e]/10 rounded-full">
            {slides[step].icon}
          </div>
          <p className="text-muted-foreground">{slides[step].description}</p>
        </div>

        <div className="absolute bottom-8 left-0 right-0 px-8">
          <Button
            className="w-full bg-[#00d09e] hover:bg-[#00d09e]/90"
            onClick={handleNext}
          >
            {step === slides.length - 1 ? "Comenzar" : "Siguiente"}
          </Button>

          <div className="flex justify-center mt-4 gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === step ? "bg-[#00d09e]" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPyme;
