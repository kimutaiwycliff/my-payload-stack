import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
