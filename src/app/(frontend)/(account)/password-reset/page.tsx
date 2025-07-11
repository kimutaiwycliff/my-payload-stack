import { getUser } from '@/actions/getUser'
import ResetForm from '@/Forms/resetPasswordForm'
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

  const { message, token } = await searchParams

  if (token) {
    return (
      <div className={`h-[100vh] w-full mx-auto sm:max-w-sm`}>
        <div className={`flex justify-center mt-8`}>
          {message && <p className={`w-auto inline-block mx-auto  border rounded-md`}>{message}</p>}
        </div>
        <ResetForm token={token} />
      </div>
    )
  } else {
    redirect(`/login?message=${encodeURIComponent('No reset token found')}`)
  }
}
export default Page
