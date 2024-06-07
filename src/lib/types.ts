import { z } from 'zod'

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    username: z.string().min(8).max(14),
    firstname: z.string(),
    lastname: z.string(),
    date: z.string(),
    month: z.string(),
    year: z.string(),
})