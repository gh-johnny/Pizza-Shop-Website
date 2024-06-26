import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

import { singIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TSignInSchema } from '@/schemas/signInSchema'

import SignAsGuest from './sign-as-guest'

export function SignIn() {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TSignInSchema>({
    defaultValues: {
      email: searchParams.get('email') ?? 'agnellopizzeria@email.com',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: singIn,
  })

  async function handleSignIn(data: TSignInSchema) {
    try {
      await authenticate({ email: data.email })
      toast.success('A link was sent to your e-mail.', {
        action: {
          label: 'Resend',
          onClick: () => handleSignIn(data),
        },
      })
    } catch (err) {
      console.error('submit sign-in error: ' + err)
      toast.error(
        'We were unable to sent the link to your e-mail. Please try again.',
      )
    }
  }

  return (
    <>
      <Helmet title='Login' />
      <div className='p-8'>
        <Button variant='outline' asChild className='absolute right-8 top-8'>
          <Link to='/sign-up'>New here? Create a free account</Link>
        </Button>

        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <section className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Access Dashboard
            </h1>
            <p className='text-sm text-muted-foreground'>
              Keep up with your sales through the partner dashboard!
            </p>
          </section>

          <form
            noValidate
            onSubmit={handleSubmit(handleSignIn)}
            className='space-y-4'
          >
            <div className='space-y-2'>
              <Label className='pl-1'>E-mail</Label>
              <Input id='email' type='email' {...register('email')} />
            </div>

            <Button
              disabled={isSubmitting}
              className='text-black w-full dark:text-white '
              type='submit'
            >
              Access
            </Button>
          </form>

          <SignAsGuest />
        </div>
      </div>
    </>
  )
}
