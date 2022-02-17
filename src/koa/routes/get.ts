import * as KoaRouter from 'koa-router'
import { Context, Next } from 'koa'

const router = new KoaRouter()

router.get('/TestGet', async (ctx: Context, next: Next) => {
  console.log(ctx.query.count)
  console.log(ctx.request.headers.token)

  ctx.body = 'TestGet Success'
})

export default router
