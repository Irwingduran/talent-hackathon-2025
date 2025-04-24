
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Calendar,
  DollarSign,
  ArrowUpCircle,
  ArrowDownCircle,
  BellRing,
  FileCheck,
  PiggyBank,
} from "lucide-react";
import Header from "@/components/Header";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: "Ene", ingresos: 4000, gastos: 2400 },
  { month: "Feb", ingresos: 3000, gastos: 1398 },
  { month: "Mar", ingresos: 2000, gastos: 9800 },
  { month: "Abr", ingresos: 2780, gastos: 3908 },
  { month: "May", ingresos: 1890, gastos: 4800 },
  { month: "Jun", ingresos: 2390, gastos: 3800 },
];

const DashboardPyme = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Panel de Control
            </h1>
            <p className="text-gray-500">
              Resumen de tu situación fiscal y financiera
            </p>
          </div>
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            2 declaraciones pendientes
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] text-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Balance Total</CardTitle>
              <DollarSign className="h-4 w-4 opacity-70" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$128,430.00</div>
              <p className="text-sm opacity-80 flex items-center gap-1">
                <ArrowUpCircle className="h-4 w-4" /> +20.1% vs mes anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Próximos Vencimientos</CardTitle>
              <Calendar className="h-4 w-4 text-[#4FD1C5]" />
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-red-600">IVA Mensual</span>
                <Badge variant="outline" className="bg-red-50 text-red-600">
                  17 Mayo
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-yellow-600">ISR Provisional</span>
                <Badge variant="outline" className="bg-yellow-50 text-yellow-600">
                  31 Mayo
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Salud Financiera</CardTitle>
              <PiggyBank className="h-4 w-4 text-[#4FD1C5]" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Liquidez</span>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    Saludable
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Endeudamiento</span>
                  <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                    Moderado
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Flujo de Efectivo</CardTitle>
              <p className="text-sm text-gray-500">Últimos 6 meses</p>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <ArrowUpCircle className="h-4 w-4 mr-1" />
              +12% promedio
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="ingresos" fill="#4FD1C5" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="gastos" fill="#CBD5E0" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Cumplimiento Fiscal
              </CardTitle>
              <FileCheck className="h-4 w-4 text-[#4FD1C5]" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Facturas emitidas</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    100% al día
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Declaraciones presentadas</span>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                    2 pendientes
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Obligaciones IMSS</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    Al corriente
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Alertas y Notificaciones
              </CardTitle>
              <BellRing className="h-4 w-4 text-[#4FD1C5]" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <p className="text-sm text-yellow-700">
                    Factura pendiente de pago: INV-001
                  </p>
                </div>
                <div className="flex items-center gap-3 p-2 bg-red-50 rounded-lg">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <p className="text-sm text-red-700">
                    Próximo vencimiento IVA: 3 días
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPyme;
