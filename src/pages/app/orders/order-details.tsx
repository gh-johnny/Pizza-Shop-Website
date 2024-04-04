import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function OrderDetails() {
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order: q93ue129uebdw</DialogTitle>
          <DialogDescription>Order details</DialogDescription>
        </DialogHeader>

        <div className='space-y-6'>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className='text-muted-foreground'>Status</TableCell>
                <TableCell className='flex justify-end'>
                  <div className='flex items-center gap-2'>
                    <span className='h-2 w-2 rounded-full bg-slate-400' />
                    <span className='font-medium text-muted-foreground'>
                      Pending
                    </span>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='text-muted-foreground'>Client</TableCell>
                <TableCell className='flex justify-end'>
                  Johnny Romero
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='text-muted-foreground'>Phone</TableCell>
                <TableCell className='flex justify-end'>
                  (999) 999-9999
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='text-muted-foreground'>E-mail</TableCell>
                <TableCell className='flex justify-end'>
                  jmfurtadoromero@gmail.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='text-muted-foreground'>
                  Ordered at
                </TableCell>
                <TableCell className='flex justify-end'>15 min ago</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className='text-right'>Amount</TableHead>
                <TableHead className='text-right'>Price</TableHead>
                <TableHead className='text-right'>Subtotal</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>Pepperoni Pizza</TableCell>
                <TableCell className='text-right'>2</TableCell>
                <TableCell className='text-right'>$24.99</TableCell>
                <TableCell className='text-right'>$49.98</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pinaple Pizza</TableCell>
                <TableCell className='text-right'>2</TableCell>
                <TableCell className='text-right'>$32.99</TableCell>
                <TableCell className='text-right'>$64.98</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total price</TableCell>
                <TableCell className='text-right font-medium'>
                  $ 114.96
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </DialogContent>
    </>
  )
}
