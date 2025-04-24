
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

const Login = () => {
  const [userType, setUserType] = useState<"pyme" | "contador">("pyme");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4FD1C5] to-[#38B2AC] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <div className="flex flex-col items-center mb-6">
          <TrendingUp className="h-12 w-12 text-[#4FD1C5] mb-2" />
          <h1 className="text-2xl font-semibold text-gray-800">Fiscal AI</h1>
          <p className="text-gray-500 text-sm mt-2">
            Inteligencia Fiscal Aumentada
          </p>
        </div>

        <div className="flex gap-2 mb-6">
          <Button
            variant={userType === "pyme" ? "default" : "outline"}
            className="w-1/2"
            onClick={() => setUserType("pyme")}
          >
            PyME
          </Button>
          <Button
            variant={userType === "contador" ? "default" : "outline"}
            className="w-1/2"
            onClick={() => setUserType("contador")}
          >
            Contador
          </Button>
        </div>

        <form className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Correo electrónico"
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Contraseña"
              className="w-full"
            />
          </div>
          <Button className="w-full bg-[#4FD1C5] hover:bg-[#38B2AC]">
            Iniciar Sesión
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/signup" className="text-[#4FD1C5] hover:text-[#38B2AC]">
            ¿No tienes cuenta? Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
