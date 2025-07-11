'use client'

import React, { ReactElement, useState } from 'react'
import { useRouter } from 'next/navigation'
import { resetPassword, ResetPasswordResponse } from '@/actions/resetPassword'
import { FormContainer, FormInput, SubmitButton } from '@/components/FormContainer'

export default function ResetForm({ token }: { token: string }): ReactElement {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)

    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (password !== confirmPassword) {
      setError(`Passwords don't match`)
      setIsLoading(false)
      return
    }

    const result: ResetPasswordResponse = await resetPassword({ token, password })

    setIsLoading(false)

    if (result.success) {
      router.push(
        `/login?message=${encodeURIComponent('Password reset successful. Login with your new password.')}`,
      )
    } else {
      setError(result.error || 'An error occurred.')
    }
  }

  return (
    <FormContainer heading={'Reset your password'}>
      <form className={`flex flex-col gap-4`} onSubmit={handleSubmit}>
        <FormInput label={'Password'} type={'password'} name={'password'} />
        <FormInput
          label={'Confirm Password'}
          type={'password'}
          name={'confirmPassword'}
          placeholder={`Confirm your new password`}
        />
        {error && <div className={`text-red-400`}>{error}</div>}
        <SubmitButton loading={isLoading} text={`Reset password`} />
      </form>
    </FormContainer>
  )
}
