import { getUser } from '@/actions/getUser'
import LoginForm from '@/Forms/loginForm'
import { redirect } from 'next/navigation'
import React from 'react'
interface SearchParams {
  [key: string]: string | undefined
}
const Page = async ({
  searchParams,
}: {
  searchParams: SearchParams
}): Promise<React.ReactElement> => {
  const user = await getUser()
  if (user) {
    redirect('/dashboard')
  }

  const { message } = await searchParams

  return (
    <div className={`h-[100vh] w-full mx-auto sm:max-w-sm`}>
      <div className={`flex justify-center mt-8`}>
        {message && (
          <p className={`w-auto inline-block mx-auto  p-4 rounded-md   border`}>{message}</p>
        )}
      </div>
      <LoginForm />
    </div>
  )
}
export default Page
