import { Nav, ProtectedRoute } from "@/admin"
import { Footer } from "@/core"

function LayoutAdmin({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <Nav />
      <main className="pl-16 lg:pl-20 pr-4 lg:pr-6 w-full min-h-[100dvh]">
        {children}
      </main>
      <Footer className="pl-16 md:pl-0" />
    </ProtectedRoute>
  )
}

export default LayoutAdmin