import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import OrderDetails from './order-details'

export default function OrderTableRow() {
  return (
    <>
      <TableRow>
        <TableCell>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='outline' size='xs'>
                <Search className='h-3 w-3' />
                <span className='sr-only'>Order details</span>
              </Button>
            </DialogTrigger>

            <OrderDetails />
          </Dialog>
        </TableCell>

        <TableCell className='font-mono text-xs font-medium'>
          93ubr19ufv1
        </TableCell>

        <TableCell className='text-muted-foreground'>15 min ago</TableCell>

        <TableCell>
          <div className='flex items-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-slate-400' />
            <span className='font-medium text-muted-foreground'>Pending</span>
          </div>
        </TableCell>

        <TableCell className='font-medium'>Johnny Romero</TableCell>

        <TableCell className='font-medium'>$ 114.96</TableCell>

        <TableCell className='text-emerald-500 dark:text-emerald-400'>
          <Button variant='outline' size='xs'>
            <ArrowRight className='h-3 w-3 mr-2 ' />
            Approve
          </Button>
        </TableCell>

        <TableCell className='text-rose-500 dark:text-rose-400'>
          <Button variant='ghost' size='xs'>
            <X className='h-3 w-3 mr-2 ' />
            Cancel
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}
