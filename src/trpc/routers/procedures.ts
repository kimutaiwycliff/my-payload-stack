import { headers as getHeaders } from 'next/headers'
import { createTRPCRouter, payloadProcedure } from '../init'

export const authRouter = createTRPCRouter({
  session: payloadProcedure.query(async ({ ctx }) => {
    const headers = await getHeaders()
    const session = await ctx.payload.auth({ headers })
    return session
  }),
})
