import { Helmet } from 'react-helmet-async'

import Pagination from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import OrderTableFilters from './order-table-filters'
import OrderTableRow from './order-table-row'

export default function Orders() {
  return (
    <>
      <Helmet title='Orders' />
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Orders</h1>

        <div className='space-y-2.5'>
          <OrderTableFilters />
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
                <OrderTableRow />
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
