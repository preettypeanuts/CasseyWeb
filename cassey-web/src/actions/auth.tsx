'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Swal from "sweetalert2"

export default async function Logout() {
    const token = cookies().get("Authorization")
    
    if (token) {
        cookies().delete("Authorization")
    }
    redirect('/login')
}
