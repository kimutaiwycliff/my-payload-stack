import { createTRPCRouter } from '../init'
import { authRouter } from './procedures'
export const appRouter = createTRPCRouter({
  auth: authRouter,
})
// export type definition of API
export type AppRouter = typeof appRouter
