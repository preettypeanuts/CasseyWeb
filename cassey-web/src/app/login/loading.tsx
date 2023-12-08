export default function Loading() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="rounded-full h-[15vh] w-[15vh] bg-cyan-600 animate-ping z-50"></div>
                <div className="rounded-full h-[30vh] w-[30vh] bg-blue-800 animate-ping z-40"></div>
                <div className="rounded-full h-[50vh] w-[50vh] bg-pink-800 animate-ping"></div>
                <div className="absolute rounded-full w-[40vh] bg-red-300 animate-ping z-40"></div>
                <div className="absolute rounded-full w-[35vh] bg-yellow-600 animate-ping z-50"></div>
                <div className="rounded-full h-[30vh] w-[30vh] bg-blue-800 animate-ping z-40"></div>
                <div className="rounded-full h-[15vh] w-[15vh] bg-cyan-600 animate-ping z-50"></div>
            </div>
        </>
    )
}