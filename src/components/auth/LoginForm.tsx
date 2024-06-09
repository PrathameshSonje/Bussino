'use client'

import { login } from "@/actions/login"
import { CardWrapper } from "./Card-wrapper";
import { SubmitHandler, useForm } from 'react-hook-form';
import { months } from "@/lib/months";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from "@/lib/types";

type FormFields = z.infer<typeof LoginSchema>

export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({
        resolver: zodResolver(LoginSchema)
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const response = await login(data);
        console.log(response);
    }

    return (
        <div>
            <CardWrapper
                headerLabel="Welcome Back"
                backButtonLabel="Dont have an account? "
                backButtonHref="/"
            >
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                        <div>
                            <label htmlFor="email" className="text-sm font-semibold">Email or Username</label>
                            <input
                                {...register("email")}
                                id="email"
                                className="w-full 10 rounded-sm bg-[#141414] p-2 border border-zinc-600" />
                            {errors.email && (
                                <div className="text-red-500 text-xs">{errors.email.message}</div>
                            )}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-semibold">Password</label>
                        <input
                            {...register("password")}
                            type="password"
                            id="password"
                            className="w-full 10 rounded-sm bg-[#141414] p-2 border border-zinc-600" />
                        {errors.password && (
                            <div className="text-red-500 text-xs">{errors.password.message}</div>
                        )}
                    </div>
                    <button
                        disabled={isSubmitting}
                        className="border-0 rounded-md bg-[#3FFFBA] w-full h-12 shadow-md font-bold text-sm text-zinc-900"
                        type="submit"
                    >
                        {isSubmitting ? "loading" : "Continue"}
                    </button>
                </form>
            </CardWrapper>
        </div>
    )
}
