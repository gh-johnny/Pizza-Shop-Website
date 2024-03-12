import z from 'zod'

export const SignInSchema = z.object({
  email: z.string().email().min(1),
})

export type TSignInSchema = z.infer<typeof SignInSchema>
