import * as KoaRouter from 'koa-router'
import { Context, Next } from 'koa'

const router = new KoaRouter()

router.post('/TestPost', async (ctx: Context, next: Next) => {
  console.log(ctx.request.body)
  console.log(ctx.request.headers.token)

  ctx.body = 'TestPost Success'
})

export default router
