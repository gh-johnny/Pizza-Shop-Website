import { z } from 'zod'

export const StoreProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

export type TStoreProfileSchema = z.infer<typeof StoreProfileSchema>
