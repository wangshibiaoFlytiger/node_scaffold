import {addGameData, findGameList} from "./controller/gameController";

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

// 定义路由
router.get("/game/addGameData", addGameData);
router.get("/game/findGameList", findGameList);

// 添加路由中间件
app.use(router.routes());

app.listen(3000);