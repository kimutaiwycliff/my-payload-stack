import { Header } from '@/Header/Component'
import { Footer } from '@/Footer/Component'

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}
