import User from "@/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import connectDB from "@/utils/db";

const handler = NextAuth({
  pages: {
    error: "/login",
    // signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "john@doe.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "xxxxxxxx",
        },
      },
      async authorize(credentials) {
        await connectDB();

        try {
          const foundUser = await User.findOne({ email: credentials!.email });

          if (foundUser) {
            // Verify the password
            const isCorrectPassword = await bcrypt.compare(
              credentials!.password,
              foundUser.password
            );

            if (isCorrectPassword) {
              return { id: foundUser._id, email: foundUser.email };
            } else {
              throw new Error("Invalid credentials");
            }
          } else {
            throw new Error("Invalid credentials");
          }
        } catch (error) {
          throw new Error(`Something went wrong ${error}`);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        //   @ts-ignore
        session.id = token.id;
      }

      return session;
    },
  },
});

// export { handler as POST, handler as GET };

export default handler;
