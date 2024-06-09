import { z } from 'zod'

export const RegisterSchema = z.object({
    email: z.string().min(1, {message: "Email is required"}).email(),
    password: z.string().min(8),
    username: z.string().min(8).max(14),
    firstname: z.string(),
    lastname: z.string(),
    date: z.string(),
    month: z.string(),
    year: z.string(),
})

export const LoginSchema = z.object({
    email: z.string().min(1, {message: "Email or Username is required"}),
    password: z.string().min(1, {message: "Password is Required"})
})
