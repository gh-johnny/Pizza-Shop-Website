import { Link } from 'react-router-dom'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { useSessionStorage } from '@/hooks/useSessionStorage'

export default function SignAsGuest() {
  const { setItem } = useSessionStorage('is_guest')
  return (
    <div className='flex'>
      <HoverCard openDelay={0}>
        <HoverCardTrigger
          asChild
          className='animate-pulse border-b-2 mx-auto cursor-pointer hover:opacity-75'
        >
          <Link to='/' onClick={() => setItem(true)}>
            Sign in as Guest!
          </Link>
        </HoverCardTrigger>
        <HoverCardContent>
          <h3 className='mb-2 font-bold'>🚀 Sign in as a Guest!</h3>
          <p className='p-2'>
            Guest accounts have no purpose but to explore the app within a
            controlled environment.
          </p>
          <p className='p-2'>That means that all actions are simulated.</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
