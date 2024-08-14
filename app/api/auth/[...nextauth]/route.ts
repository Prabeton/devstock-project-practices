import NextAuth, { AuthOptions, User, Account, Profile } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"
import bcrypt from "bcrypt"

import { prisma } from '@/lib/prismadb'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.password) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/landing',
    newUser: '/register'
  },

  callbacks: {
    async signIn({ user, account, profile, email }): Promise<boolean> {
      if (account?.provider === "github" && profile?.email) {
        const userEmail = profile.email;

        const existingUser = await prisma.user.findUnique({
          where: { email: userEmail },
        });

        if (!existingUser) {
          const newUser = await prisma.user.create({
            data: {
              email: userEmail,
              acceptedTerms: true,
              name: '',
              lastName: '',
              nick: '',
            },
          });
        }
      }
      return true;
    },

    async redirect({ url, baseUrl }) {
      const finalUrl = `${baseUrl}/dashboard`;
      return finalUrl;
    },

    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).id = token.sub!;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }