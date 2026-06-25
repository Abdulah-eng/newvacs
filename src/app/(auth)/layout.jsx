export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navydark via-navy to-navy flex items-center justify-center px-4">
      {children}
    </div>
  )
}
