import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className='flex items-center justify-center py-5'>
        <SignIn />
    </main>
  )
}

export default SignInPage