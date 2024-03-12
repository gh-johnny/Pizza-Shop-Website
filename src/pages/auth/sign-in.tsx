import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SignIn() {
  return (
    <>
      <Helmet title='Login' />
      <div className='p-8'>
        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <section className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Access dashboard
            </h1>
            <p className='text-sm text-muted-foreground'>
              Keep up with your sales through the partner dashboard!
            </p>
          </section>

          <form className='space-y-4'>
            <div className='space-y-2'>
              <Label>Your e-mail</Label>
              <Input id='email' type='email' />
            </div>

            <Button className='w-full' type='submit'>
              Access Dashboard
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
