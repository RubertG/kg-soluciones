import type { Metadata } from "next"
import "./globals.css"
import { poppins } from "@/core"

export const metadata: Metadata = {
  title: "KG Soluciones - Servicios y contácto",
  description: "KG Soluciones ofrece servicios integrales de diseño, modelado e impresión 3D; fabricación y reparación de sistemas de alarma para vehículos y hogares; instalación de cámaras de seguridad, portones eléctricos y domótica; gestión de seguridad y salud en el trabajo; desarrollo y mantenimiento de sistemas automatizados; y soporte técnico en electrónica y electricidad automotriz.",
  keywords: ["diseño 3D", "modelado 3D", "impresión 3D", "ingeniería electromecánica", "fabricación de piezas plásticas", "sistemas de alarma vehicular", "sistemas de alarma hogar", "cámaras de seguridad", "portones eléctricos", "domótica", "seguridad en el trabajo", "automatización", "mantenimiento de sistemas automatizados", "reparación de tarjetas electrónicas", "electricidad automotriz"]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-bg-100 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
