'use client'

import React, { ReactElement, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FormContainer, FormInput, SubmitButton } from '@/components/FormContainer'
import { create, CreateResponse } from '@/actions/create'

export default function CreateForm(): ReactElement {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    const result: CreateResponse = await create({ email, password, lastName, firstName })

    setIsLoading(false)

    if (result.success) {
      router.push(`/login?message=${encodeURIComponent('Check your email to verify your account')}`)
    } else {
      setError(result.error || 'An error occurred.')
    }
  }

  return (
    <FormContainer heading={'Create an account'}>
      <form className={`flex flex-col gap-4`} onSubmit={handleSubmit}>
        <div className={`flex flex-row flex-1/2 gap-2`}>
          <FormInput label={`First Name`} name={`firstName`} type={'text'} />
          <FormInput label={`Last Name`} name={`lastName`} type={'text'} />
        </div>
        <FormInput label={'Email'} type={'email'} name={'email'} />
        <FormInput label={'Password'} type={'password'} name={'password'} />
        <FormInput
          label={'Confirm Password'}
          type={'password'}
          name={'confirmPassword'}
          placeholder={'Confirm your password'}
        />
        {error && <div className={`text-red-400`}>{error}</div>}
        <SubmitButton loading={isLoading} text={`Create account`} />
      </form>
      <div className={`mt-4`}>
        <p className={`text-sm text-emerald-950/50`}>
          Already have an account?{' '}
          <Link className={`underline underline-offset-4`} href={`/login`}>
            Login here.
          </Link>
        </p>
      </div>
    </FormContainer>
  )
}
