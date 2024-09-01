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
      <main className="pl-16 pr-4 w-full min-h-[100dvh]">
        {children}
      </main>
      <Footer className="pl-16" />
    </ProtectedRoute>
  )
}

export default LayoutAdmin