'use server'

import { z } from 'zod'
import { LoginSchema } from "@/lib/types"
import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'

export const register = async (formData: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(formData);
    if (!validatedFields) return { error: "Invalid fields" };

    const {
        email,
        password,
        username,
        firstname,
        lastname,
        date,
        month,
        year } = validatedFields.data!


    const existing_user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (existing_user) return {
        error: 'Email already in use'
    }

    const hashedpassword = await bcrypt.hash(password, 10)

    const new_user = await prisma.user.create({
        data: {
            email,
            username,
            password: hashedpassword,
            name: firstname + lastname,
        }
    })

    return { success: "Successfully registered" }
}