
import Koa from 'koa'
import http from 'http'
import koaBodyParser from 'koa-bodyparser'
const path = require('path')
import { getAllFilesExport } form '../common/utils/utils'
class Init {
  public static app: Koa<Koa.DefaultState, Koa.DefaultContext>
  public static server: http.Server
  public static initCore(app: Koa<Koa.DefaultState, Koa.DefaultContext>, server: http.Server) {
    Init.app = app
    Init.server = server
    Init.loadBodyParser()
  }

  // 解析body参数
  public static loadBodyParser() {
    Init.app.use(koaBodyParser())
  }
  static async initLoadRouters() {
    const dirPath = path.join(`${process.cwd()}/src/api/`)
    getAllFilesExport(dirPath, (file: Router) => {
      Init.app.use(file.routes())
    })
  }
}

export default Init.initCore
