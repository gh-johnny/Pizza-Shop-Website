import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Orders() {
  return (
    <>
      <Helmet title='Orders' />
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Orders</h1>
      </div>

      <div className='space-y-2.5'>
        <form className='flex items-center gap-2'>
          <span className='text-sm font-semibold'>Filters</span>
          <Input placeholder='Client name' className='h-8 w-[320px]' />
        </form>

        <div className='border rounded-md'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[64px]'></TableHead>
                <TableHead className='w-[140px]'>Id</TableHead>
                <TableHead className='w-[180px]'>Ordered at</TableHead>
                <TableHead className='w-[140px]'>Status</TableHead>
                <TableHead>Client</TableHead>
                <TableHead className='w-[140px]'>Amount</TableHead>
                <TableHead className='w-[164px]'></TableHead>
                <TableHead className='w-[132px]'></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Button variant='outline' size='xs'>
                    <Search className='h-3 w-3' />
                    <span className='sr-only'>Order details</span>
                  </Button>
                </TableCell>

                <TableCell className='font-mono text-xs font-medium'>
                  93ubr19ufv1
                </TableCell>

                <TableCell className='text-muted-foreground'>
                  15 min ago
                </TableCell>

                <TableCell className=''>
                  <div className='flex items-center gap-2'>
                    <span className='h-2 w-2 rounded-full bg-slate-400' />
                    <span className='font-medium text-muted-foreground'>
                      Pending
                    </span>
                  </div>
                </TableCell>

                <TableCell className='font-medium'>Johnny Romero</TableCell>

                <TableCell className='font-medium'>$49.98</TableCell>

                <TableCell className='text-green-500 dark:text-green-400'>
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
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
