import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider  from 'next-auth/providers/credentials';

const handle = NextAuth({
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_SECRET!,
  }), CredentialsProvider({
    name: "Credentials",
    credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"}
    },
    async authorize(credentials) {
        await connectToDB();
        const user = await User.findOne({email: credentials.email});
        if (!user) {
            throw new Error("User not found");
        }
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        
    }
  })],
  jwt: 
});
