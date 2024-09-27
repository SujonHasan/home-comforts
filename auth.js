import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from 'next-auth/providers/facebook';
import mongoClientPromise from "./db/mongoClientPromise";
import CredentialsProvider from "next-auth/providers/credentials";
import { userModel } from "./models/user-Model";


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, {databaseName: process.env.DB }),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
        credentials: {
            email: {},
            password: {},
        },

        async authorize(credentials) {
            if (!credentials) return null;

            try {
                const user = await userModel.findOne({email: credentials.email});
                if (user) {
                    const isMatch = user.email === credentials.email;
                    if(isMatch) {
                      const isPassMatch = await user.isPasswordMatch(credentials.password);

                      if(!isPassMatch) throw new Error('password mismatch');
                      else return user;
                        
                    } else {
                        throw new Error('Email mismatch');
                    }
                } else {
                    throw new Error('User not found');
                }
            } catch(error) {
                throw new Error(error);
            }
        }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    })
  ],
});

