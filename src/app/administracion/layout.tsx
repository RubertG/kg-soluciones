import { ProtectedRoute } from "@/admin"

function LayoutAdmin({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  )
}

export default LayoutAdmin