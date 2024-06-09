'use client'

import { CardWrapper } from "./Card-wrapper";
import { SubmitHandler, useForm } from 'react-hook-form';
import { months } from "@/lib/months";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from "@/lib/types";
import { registerUser } from "@/actions/register";

type FormFields = z.infer<typeof RegisterSchema>

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({
        resolver: zodResolver(RegisterSchema)
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const response = await registerUser(data);
        console.log(response);
    }

    return (
        <div>
            <CardWrapper
                headerLabel="Create an Account"
                backButtonLabel="Already have an account? "
                backButtonHref="/"
            >
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                        <div>
                            <label htmlFor="email" className="text-sm font-semibold">Email</label>
                            <input
                                {...register("email")}
                                id="email"
                                type="email"
                                className="w-full 10 rounded-sm bg-[#141414] p-2 border border-zinc-600" />
                            {errors.email && (
                                <div className="text-red-500 text-xs">{errors.email.message}</div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="username" className="text-sm font-semibold">Username</label>
                            <input
                                {...register("username")}
                                id="username"
                                className="w-full 10 rounded-sm bg-[#141414] p-2 border border-zinc-600" />
                            {errors.username ? (
                                <div className="text-red-500 text-xs">{errors.username.message}</div>
                            ) : (
                                <span className="text-xs font-light">Your username must be 3-14 characters long.</span>
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
                    <div className="flex space-x-2">
                        <div>
                            <label htmlFor="first_name" className="text-sm font-semibold">First name</label>
                            <input
                                {...register("firstname")}
                                id="first_name"
                                className="w-full 10 rounded-sm bg-[#141414] p-2 border border-zinc-600" />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="text-sm font-semibold">Last name</label>
                            <input
                                {...register("lastname")}
                                id="last_name"
                                className="w-full 10 rounded-sm bg-[#141414] p-2 border border-zinc-600" />
                        </div>
                    </div>

                    <div id="DOB">
                        <label htmlFor="DOB" className="text-sm font-semibold">Date of Birth</label>
                        <div className="flex space-x-2">
                            <input
                                {...register("date")}
                                type="number"
                                placeholder="DD"
                                className="w-full 10 rounded-sm bg-[#141414] p-2 border border-zinc-600" />
                            {errors.date && (
                                <div className="text-red-500 text-xs">{errors.date.message}</div>
                            )}
                            <select
                                {...register("month", {
                                    required: "Month is required"
                                })}
                                id="month"
                                className="w-full 10 rounded-sm bg-[#141414] p-2 border border-zinc-600"
                            >
                                <option value={0}>DD</option>
                                {
                                    months.map((e, index) => (
                                        <option key={index} value={index + 1}>{e}</option>
                                    ))
                                }
                            </select>
                            {errors.month && (
                                <div className="text-red-500 text-xs">{errors.month.message}</div>
                            )}
                            <input
                                {...register("year")}
                                type="number"
                                placeholder="YYYY"
                                className="w-full 10 rounded-sm bg-[#141414] p-2 border border-zinc-600" />
                            {errors.year && (
                                <div className="text-red-500 text-xs">{errors.year.message}</div>
                            )}
                        </div>
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
