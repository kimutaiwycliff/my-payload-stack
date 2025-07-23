import { ForgotPasswordForm } from '@/Forms/ForgotPasswordForm'
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const ForgotPasswordPage = async () => {

  const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (session) {
      redirect('/');
    }
  return (
   <ForgotPasswordForm />
  )
}

export default ForgotPasswordPage