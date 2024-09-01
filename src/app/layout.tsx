import type { Metadata } from "next"
import "./globals.css"
import { defaultUrl, poppins } from "@/core"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "KG Soluciones - Servicios y contácto",
  description: "KG Soluciones ofrece servicios integrales de diseño, modelado e impresión 3D; fabricación y reparación de sistemas de alarma para vehículos y hogares; instalación de cámaras de seguridad, portones eléctricos y domótica; gestión de seguridad y salud en el trabajo; desarrollo y mantenimiento de sistemas automatizados; y soporte técnico en electrónica y electricidad automotriz.",
  keywords: ["diseño 3D", "modelado 3D", "impresión 3D", "ingeniería electromecánica", "fabricación de piezas plásticas", "sistemas de alarma vehicular", "sistemas de alarma hogar", "cámaras de seguridad", "portones eléctricos", "domótica", "seguridad en el trabajo", "automatización", "mantenimiento de sistemas automatizados", "reparación de tarjetas electrónicas", "electricidad automotriz"],
  openGraph: {
    title: "KG Soluciones - Servicios y contácto",
    description: "KG Soluciones ofrece servicios integrales de diseño, modelado e impresión 3D; fabricación y reparación de sistemas de alarma para vehículos y hogares; instalación de cámaras de seguridad, portones eléctricos y domótica; gestión de seguridad y salud en el trabajo; desarrollo y mantenimiento de sistemas automatizados; y soporte técnico en electrónica y electricidad automotriz.",
    url: defaultUrl,
    siteName: "KG Soluciones - Servicios y contácto",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630
      }
    ],
    locale: "es-ES",
    type: "website"
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.webp" />
      </head>
      <body className={`${poppins.className} bg-bg-100 antialiased overflow-x-hidden`}>
        {children}
        <Toaster
          richColors
          toastOptions={{
            unstyled: true,
            classNames: {
              toast: 'w-full py-3 px-4 rounded-lg text-sm flex items-center justify-start gap-1.5',
              error: '!text-red-100 !bg-red-950/40 border !border-red-950'
            }
          }}
        />
      </body>
    </html>
  )
}
