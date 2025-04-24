
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, Brain, Users } from "lucide-react";

const OnboardingContador = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Bienvenido al Panel Multi-Cliente",
      icon: <Users className="w-24 h-24 text-[#00d09e]" />,
      description: "Gestiona todos tus clientes desde un solo lugar"
    },
    {
      title: "Potencia tu Práctica con IA",
      icon: <Brain className="w-24 h-24 text-[#00d09e]" />,
      description: "Automatiza tareas y mejora tu eficiencia"
    },
    {
      title: "Desarrollo Profesional Continuo",
      icon: <BookOpen className="w-24 h-24 text-[#00d09e]" />,
      description: "Mantente actualizado con las últimas normas fiscales"
    }
  ];

  const handleNext = () => {
    if (step === slides.length - 1) {
      navigate("/dashboard/contador");
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

export default OnboardingContador;
