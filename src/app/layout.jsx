import './globals.css'

export const metadata = {
  title: 'VACS — Virtual Ambulatory Care Simulator',
  description: 'VACS — Virtual Ambulatory Care Simulator (pharmacy-student EMR simulation MVP)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
