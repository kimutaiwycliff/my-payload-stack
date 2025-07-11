import React from 'react'
import { redirect } from 'next/navigation'
import { getUser } from '@/actions/getUser'
import CreateForm from '@/Forms/createForm'


export default async function Page(): Promise<React.ReactElement> {
  const user = await getUser()
  if (user) {
    redirect('/dashboard')
  }
  return <div className={`h-[100vh]`}>
    <CreateForm />
  </div>
}
