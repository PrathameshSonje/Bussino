'use client'

import { auth } from "../../../../auth"

const page = async () => {
    const session = await auth();
  return (
    <div>{session?.user?.email}</div>
  )
}

export default page