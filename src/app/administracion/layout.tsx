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
      <main className="pl-16 lg:pl-20 pr-4 lg:pr-6 grid grid-rows-2 min-h-[100dvh]">
        <div className="row-span-full max-w-[calc(100vw-80px)] lg:max-w-[calc(100vw-104px)]">
          {children}
        </div>
        <Footer />
      </main>
    </ProtectedRoute>
  )
}

export default LayoutAdmin