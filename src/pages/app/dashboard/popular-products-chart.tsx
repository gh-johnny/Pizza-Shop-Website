import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import color from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  {
    product: 'Pepperoni',
    revenue: 19,
  },
  {
    product: 'Pinaple',
    revenue: 12,
  },
  {
    product: 'Veggie',
    revenue: 11,
  },
  {
    product: 'New York',
    revenue: 5,
  },
  {
    product: 'Rio',
    revenue: 9,
  },
]

const COLORS = [
  color.sky[500],
  color.amber[500],
  color.violet[500],
  color.emerald[500],
  color.rose[500],
]

export default function PopularProductsChart() {
  return (
    <Card className='col-span-3'>
      <CardHeader className='pb-8'>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-base font-medium'>
            Popular products
          </CardTitle>
          <BarChart className='w-4 h-4 text-muted-foreground' />
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width='100%' height={240}>
          <PieChart style={{ fontsize: 12 }}>
            <Pie
              data={data}
              dataKey='revenue'
              nameKey='product'
              cx='50%'
              cy='50%'
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className='fill-muted-foreground text-xs'
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline='central'
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {data.map((_, i) => (
                <Cell
                  key={`cell-${i}`}
                  fill={COLORS[i]}
                  className='stroke-background hover:opacity-80'
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
