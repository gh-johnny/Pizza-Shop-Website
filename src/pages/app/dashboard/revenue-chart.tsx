import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import color from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  {
    date: '10/12',
    revenue: 1900,
  },
  {
    date: '11/12',
    revenue: 1298,
  },
  {
    date: '12/12',
    revenue: 1119,
  },
  {
    date: '13/12',
    revenue: 929,
  },
  {
    date: '14/12',
    revenue: 858,
  },
  {
    date: '15/12',
    revenue: 1193,
  },
  {
    date: '16/12',
    revenue: 1593,
  },
  {
    date: '17/12',
    revenue: 1229,
  },
]

export default function RevenueChart() {
  return (
    <Card className='col-span-6'>
      <CardHeader className='flex-row items-center justify-between pb-8'>
        <div className='space-y-1'>
          <CardTitle className='text-base font-medium'>
            Income in period
          </CardTitle>
          <CardDescription>Daily income</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width='100%' height={240}>
          <LineChart data={data} style={{ fontsize: 12 }}>
            <CartesianGrid vertical={false} className='stroke-muted' />
            <Line
              type='linear'
              strokeWidth={2}
              dataKey='revenue'
              stroke={color.violet[500]}
            />
            <YAxis
              stroke='#888'
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })
              }
            />
            <XAxis dataKey='date' tickLine={false} axisLine={false} dy={16} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
