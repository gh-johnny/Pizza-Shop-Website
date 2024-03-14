import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TSignUpSchema } from '@/schemas/signUpSchema'

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TSignUpSchema>()

  async function handleSignIn(data: TSignUpSchema) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    try {
      console.log(data)
      toast.success('Restaurant account successfully created', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (err) {
      console.error('submit sign-in error: ' + err)
      toast.error('Unable to create account. Please try again.')
    }
  }

  return (
    <>
      <Helmet title='Sign Up' />
      <div className='p-8'>
        <Button variant='outline' asChild className='absolute right-8 top-8'>
          <Link to='/sign-in'>Already have an account? Sign-in here</Link>
        </Button>

        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <section className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Create an account
            </h1>
            <p className='text-sm text-muted-foreground'>
              Become a partner for free and start to sell!
            </p>
          </section>

          <form
            noValidate
            onSubmit={handleSubmit(handleSignIn)}
            className='space-y-4'
          >
            <div className='space-y-2'>
              <Label className='pl-1'>Restaurant name</Label>
              <Input id='restaurantName' {...register('restaurantName')} />
            </div>
            <div className='space-y-2'>
              <Label className='pl-1'>Manager name</Label>
              <Input id='managerName' {...register('managerName')} />
            </div>
            <div className='space-y-2'>
              <Label className='pl-1'>E-mail</Label>
              <Input id='email' type='email' {...register('email')} />
            </div>
            <div className='space-y-2'>
              <Label className='pl-1'>Phone</Label>
              <Input id='phone' {...register('phone')} />
            </div>

            <Button disabled={isSubmitting} className='w-full' type='submit'>
              Sign Up!
            </Button>

            <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
              By creating your account, you are agreeing to our app&apos;s{' '}
              <a className='underline underline-offset-4' href='#'>
                policies
              </a>{' '}
              and{' '}
              <a className='underline underline-offset-4' href='#'>
                terms
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
