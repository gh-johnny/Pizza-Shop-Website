import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DaysOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className='flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-base font-semibold'>
          Total orders (day)
        </CardTitle>
        <Utensils className='h-4 w-4 text-muted-foreground' />
      </CardHeader>

      <CardContent className='space-y-1'>
        <span className='text-2xl font-bold tracking-tight'>8</span>
        <p className='text-xs text-muted-foreground'>
          <span className='text-rose-500 dark:text-rose-400'>-4%</span> related
          to yesterday
        </p>
      </CardContent>
    </Card>
  )
}
