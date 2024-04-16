import { api } from '@/lib/axios'

export interface ISignInBody {
  email: string
}

export async function singIn({ email }: ISignInBody) {
  await api.post('/authenticate', { email })
}
