'use client'
import { ForgotPassword } from '@/actions/forgotPassword'
import { logout } from '@/actions/logout'
import { Loader, LogOut } from 'lucide-react'
import { redirect, useRouter } from 'next/navigation'
import { useState } from 'react'

export const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleLogout() {
    setIsLoading(true)
    setError(null)

    const result = await logout()

    setIsLoading(false)

    if (result.success) {
      router.push('/login')
    } else {
      setError(result.error || 'Logout failed')
    }
  }

  return (
    <>
      {error && <p className="text-red-400">{error}</p>}
      <button
        onClick={handleLogout}
        disabled={isLoading}
        className={'px-2 py-1 cursor-pointer flex items-center  rounded-md border  '}
      >
        {isLoading ? (
          'Logging out...'
        ) : (
          <div className="flex items-center justify-start gap-4">
            <LogOut size={24} />
            <p>Logout</p>
          </div>
        )}
      </button>
    </>
  )
}

export const ResetPasswordButton = ({ email }: { email: string }) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    await ForgotPassword({ email: email })
    setIsLoading(false)
    setIsClicked(true)
    await logout()
    redirect(`/login?message=${encodeURIComponent('Password reset request sent to your email.')}`)
  }

  return <div>
    <button
      disabled={isClicked}
      className={`${!isClicked ? 'cursor-pointer' : 'cursor-not-allowed'} mt-8 mb-4 w-auto px-4 py-2 rounded-md bg-emerald-50 text-emerald-950 border border-emerald-950 shadow-sm flex items-center justify-center gap-4`}
      type={'button'} onClick={handleClick}>{!isClicked ? 'Reset Password' : 'Password reset requested!'}
      <Loader className={`animate-spin ${isLoading ? 'inline-block' : 'hidden'}`}
      />
    </button>
    {isClicked && <div className={`text-emerald-950/50`}>
      <p>Check your email for more instructions.</p>
    </div>}
  </div>
}
