import * as Koa from 'koa'
import * as BodyParser from 'koa-bodyparser'

import router from './routes/index'

const app = new Koa()

app.use(BodyParser())
app.use(router.routes())

app.listen(8080)

console.log('Server running on port 8080')
