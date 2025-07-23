import { LoginForm } from '@/Forms/loginForm'
import { redirect } from 'next/navigation';
import { isSessionValid } from '@/utilities/isSessionValid';

const LoginPage = async () => {

  if (await isSessionValid()) {
    redirect('/');
  }
  return <LoginForm />
}

export default LoginPage

