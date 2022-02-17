import * as KoaRouter from 'koa-router'
import GetRouter from './get'
import PostRouter from './post'

const router = new KoaRouter()

router.use(GetRouter.routes(), GetRouter.allowedMethods())
router.use(PostRouter.routes(), PostRouter.allowedMethods())

export default router
