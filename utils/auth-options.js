import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";

import { db } from "@/utils/db";

export const AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      name: "credentials",
      id: "credentials",
      async authorize(credentials) {
        console.log(credentials);
        try {
          if (!credentials.email || !credentials.password) {
            throw new Error("missing credentials");
          }

          const User = await db.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!User) {
            throw new Error("email not found");
          }

          const comparepassword = await bcrypt.compare(
            credentials.password,
            User?.password
          );
          if (!comparepassword) {
            throw new Error("incorrect password");
          }

          return User;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  pages: {
    error: "/auth/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};
