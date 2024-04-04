import { Building, ChevronDown, LogOut } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export default function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='flex items-center gap-2 select-none'
        >
          Pizza Shop
          <ChevronDown className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-56'>
        <DropdownMenuLabel className='flex flex-col'>
          <span>Johnny Romero</span>
          <span className='text-xs font-normal text-muted-foreground'>
            jmfurtadoromero@gmail.com
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Building className='w-4 h-4 mr-2' />
          <span>Store profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='text-rose-500 dark:text-rose-400'>
          <LogOut className='w-4 h-4 mr-2' />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
