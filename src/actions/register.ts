'use server'

import { z } from 'zod'
import { RegisterSchema } from "@/lib/types"
import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { signIn } from '../../auth'
import { AuthError } from 'next-auth'

export const registerUser = async (formData: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(formData);
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
            name: firstname + " " + lastname,
        }
    })

    
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: '/'
        })
    } catch(error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: 'Invalid credentials!'}
                default:
                    return { error: 'something went wrong!'}
            }
        }
        throw error;
    }

    console.log(new_user);
    return { success: "Successfully registered" }
}