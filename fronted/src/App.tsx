import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import OnboardingPyme from "./pages/onboarding/OnboardingPyme";
import OnboardingContador from "./pages/onboarding/OnboardingContador";
import DashboardPyme from "./pages/dashboard/DashboardPyme";
import DashboardContador from "./pages/dashboard/DashboardContador";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/onboarding/pyme" element={<OnboardingPyme />} />
            <Route path="/onboarding/contador" element={<OnboardingContador />} />
            <Route path="/dashboard/pyme" element={<DashboardPyme />} />
            <Route path="/dashboard/contador" element={<DashboardContador />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
