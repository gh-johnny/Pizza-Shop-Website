import z from 'zod'

export const SignUpSchema = z.object({
  restaurantName: z.string().min(1),
  managerName: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email().min(1),
})

export type TSignUpSchema = z.infer<typeof SignUpSchema>
