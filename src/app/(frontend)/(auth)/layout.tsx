import { Logo } from '@/components/Logo/Logo'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6  p-6 md:p-10">
        <div className="flex w-full max-w-md flex-col gap-6">
          <Logo className="self-center" />
          {children}
        </div>
      </div>
    </main>
  )
}
