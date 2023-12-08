import { redirect } from "next/navigation"
import { cookies } from "next/headers"

type ProtectedProps = {
    children: React.ReactNode
}

const ServerProtectedComponent = ({ children }: ProtectedProps) => {
    const cookieStore = cookies()

    const token = cookieStore.get("Authorization")

    if (!token) {
        redirect("/login")
    }

    return <>{children}</>
}

export default ServerProtectedComponent