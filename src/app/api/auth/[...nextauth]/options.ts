import type { NextAuthOptions } from 'next-auth'
// import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
    
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID!,
        //     clientSecret: process.env.GITHUB_SECRET!,
        // }),
        
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials

                const user = { id: "001", name: "vidar_adm", password: "12345" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
        
    ],
    pages: {
        signIn: "/vidar_login",
    },
    // callbacks: {
    //     async signIn({ user, account, profile, email, credentials }) {
    //       const isAllowedToSignIn = true
    //       if (isAllowedToSignIn) {
    //         return '/'
    //       } else {
    //         // Return false to display a default error message
    //         // return false
    //         // Or you can return a URL to redirect to:
    //         return '/unauthorized'
    //       }
    //     }
    // }
}