
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  AlertTriangle,
  FileText,
  Clock,
  CheckCircle,
  TrendingUp,
  Search,
  BellRing,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const DashboardContador = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Panel Multi-Cliente
            </h1>
            <p className="text-gray-500">
              Vista general de tus clientes y sus estados fiscales
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar cliente..."
                className="pl-10 w-[250px]"
              />
            </div>
            <Button className="bg-[#4FD1C5] hover:bg-[#38B2AC]">
              Nuevo Cliente
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] text-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Clientes</CardTitle>
              <Users className="h-4 w-4 opacity-70" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-sm opacity-80">+2 nuevos este mes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Clientes en Riesgo
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-500">3</div>
              <p className="text-sm text-gray-500">Requieren atención inmediata</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Declaraciones Pendientes
              </CardTitle>
              <FileText className="h-4 w-4 text-[#4FD1C5]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-sm text-gray-500">Esta semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Tiempo Ahorrado
              </CardTitle>
              <Clock className="h-4 w-4 text-[#4FD1C5]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12h</div>
              <p className="text-sm text-gray-500">Esta semana con IA</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Clientes en Riesgo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="font-medium">Comercial del Norte SA</p>
                    <p className="text-sm text-gray-500">
                      Declaración IVA vencida
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-red-100 text-red-700">
                  Urgente
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="font-medium">Servicios Digitales MX</p>
                    <p className="text-sm text-gray-500">
                      Facturas sin clasificar
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-yellow-100 text-yellow-700">
                  Atención
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="font-medium">Constructora Pacífico</p>
                    <p className="text-sm text-gray-500">
                      Documentos pendientes
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-yellow-100 text-yellow-700">
                  Atención
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Tareas Pendientes
              </CardTitle>
              <FileText className="h-4 w-4 text-[#4FD1C5]" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Revisar declaraciones IVA (3)</span>
                  </div>
                  <Badge>Hoy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Conciliar bancos (2 clientes)</span>
                  </div>
                  <Badge>Mañana</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Actualizar expedientes</span>
                  </div>
                  <Badge>Esta semana</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Últimas Notificaciones
              </CardTitle>
              <BellRing className="h-4 w-4 text-[#4FD1C5]" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-2 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">
                      Nuevo cliente registrado
                    </p>
                    <p className="text-xs text-gray-500">Hace 2 horas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <div>
                    <p className="text-sm font-medium">
                      Actualización de normativa fiscal
                    </p>
                    <p className="text-xs text-gray-500">Hace 1 día</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardContador;
