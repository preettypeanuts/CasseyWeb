'use client'

export const RemoveBtn = () => {
    return (
        <>
            <a
                href="#"
                className="mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-blue-800 to-red-600 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
            >
                Remove
                <i className="bx bx-trash" />
            </a>
        </>
    )
}