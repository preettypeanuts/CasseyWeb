"use client"
import { useSearchParams } from "next/navigation"

const ClientFlashComponent = () => {
    const searchParams = useSearchParams()
    const errorMessage = searchParams.get("error")
    return (
        <>
            {errorMessage && (
                <p className="animate-pulse rounded text-red-600 px-4 py-2 text-center">
                    {errorMessage}
                </p>
            )}
        </>
    )
}

export default ClientFlashComponent