import { getUser } from '@/actions/getUser'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'
import { LogoutButton } from './Buttons'

const Template: React.FC<{ children: ReactNode }> = async ({children}) => {
  const user = await getUser()
  if (!user) {
    redirect('/login')
  }

  return <>
    <div className={`bg-emerald-500 p-4`}>
      <LogoutButton />
  </div>
    {children}
  </>
}

export default Template
