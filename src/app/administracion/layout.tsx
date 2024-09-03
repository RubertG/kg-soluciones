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
      <main className="pl-16 lg:pl-20 pr-4 lg:pr-6 w-full grid grid-rows-2 min-h-[100dvh]">
        <div className="row-span-full">
          {children}
        </div>
        <Footer className="pl-16 md:pl-0" />
      </main>
    </ProtectedRoute>
  )
}

export default LayoutAdmin