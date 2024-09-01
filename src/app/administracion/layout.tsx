import { Nav, ProtectedRoute } from "@/admin"

function LayoutAdmin({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <Nav />
      <main className="pl-16 pr-4 w-full min-h-[86dvh]">
        {children}
      </main>
    </ProtectedRoute>
  )
}

export default LayoutAdmin