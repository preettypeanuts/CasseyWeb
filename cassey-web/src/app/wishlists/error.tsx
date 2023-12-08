'use client'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (

        <div className="absolute flex flex-col justify-center items-center h-screen w-screen gap-1">
            <h2 className="z-50">Something went wrong!</h2>
            <div className="flex justify-center items-center">
                <div className="absolute rounded-full h-screen w-screen bg-red-600 animate-ping z-50"></div>
                <div className="absolute rounded-full h-[30vh] w-[30vh] bg-red-800 animate-ping z-40"></div>
                <div className="absolute rounded-full h-[50vh] w-[50vh] bg-red-800 animate-ping"></div>
                <div className="absolute rounded-full w-[40vh] bg-red-300 animate-ping z-40"></div>
                <div className="absolute rounded-full w-[35vh] bg-red-600 animate-ping z-50"></div>
                <div className="absolute rounded-full h-[30vh] w-[30vh] bg-red-800 animate-ping z-40"></div>
                <div className="absolute rounded-full h-[15vh] w-[15vh] bg-red-600 animate-ping z-50"></div>
            </div>
            <button className="z-50 ocus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => reset()}>Try again</button>
        </div>
    )
}