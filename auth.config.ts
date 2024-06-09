import { getUserbyEmail } from "@/data/user";
import { LoginSchema } from "@/lib/types"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
 
export default { providers: [Credentials({
    authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials);
        console.log('hi from validated fields');
        //TODO
        //extend user session add more fields

        if(validatedFields.success) {
            const { email, password } = validatedFields.data;

            const userData = await getUserbyEmail(email);
            if(!userData || !userData.password) throw new Error("Invalid credentials");

            const passwordsMatch = await bcrypt.compare(
                password,
                userData.password
            )

            const user = {
                id: JSON.stringify(userData.id),
                email: userData.email,
            }

            if(passwordsMatch) return user;
        }

        throw new Error("User not found.");
    }
})] } satisfies NextAuthConfig