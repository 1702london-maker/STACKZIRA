'use client'
import { usePathname } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <>
      {!isHome && <Nav />}
      <main>{children}</main>
      {!isHome && <Footer />}
      {!isHome && <FloatingButtons />}
    </>
  )
}
