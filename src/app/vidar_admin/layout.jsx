import LoginPage from '@/components/login/LoginPage'
import AdminPanel from '@/components/admin/AdminPanel'

import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function Layout({children}){
    const session = await getServerSession(options)
    
    return session ? <AdminPanel>{children}</AdminPanel> : <LoginPage />
}