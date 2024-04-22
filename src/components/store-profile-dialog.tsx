import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import {
  StoreProfileSchema,
  TStoreProfileSchema,
} from '@/schemas/storeProfileSchema'

import { Button } from './ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

export function StoreProfileDialog() {
  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant-query'],
    queryFn: getManagedRestaurant,
  })

  const { register, handleSubmit } = useForm<TStoreProfileSchema>({
    resolver: zodResolver(StoreProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  const submitEditStore = () => {}

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Store profile</DialogTitle>
        <DialogDescription>
          Update your stablishment{"'"}s visible to users info
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(submitEditStore)}>
        <section className='space-y-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label className='text-right' htmlFor='name'>
              Name
            </Label>
            <Input className='col-span-3' id='name' {...register('name')} />
          </div>

          <div className='grid grid-cols-4 items-center gap-4'>
            <Label className='text-right' htmlFor='description'>
              Description
            </Label>
            <Textarea
              className='col-span-3'
              id='description'
              {...register('description')}
            />
          </div>
        </section>
        <DialogFooter>
          <Button type='button' variant='ghost'>
            Cancel
          </Button>
          <Button type='submit' variant='success'>
            Save
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
