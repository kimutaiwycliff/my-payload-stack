import { RegisterForm } from '@/Forms/registerForm'
import { redirect } from 'next/navigation';
import { isSessionValid } from '@/utilities/isSessionValid';

const SignUpPage = async () => {
  if (await isSessionValid()) {
      redirect('/');
    }
  return <RegisterForm />
}

export default SignUpPage
