import { NowRequest, NowResponse } from '@vercel/node'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],

  database: process.env.MONGODB_URI
}

export default (request: NowRequest, response: NowResponse) =>
  NextAuth(request, response, options)
