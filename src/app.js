import {addGameData, findGameList, findPage} from "./controller/gameController";

const config = require("config");
const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

// 添加koa-body中间件,使可以获取request body参数
const koaBody = require('koa-body');

// 定义路由
router.post("/game/addGameData", koaBody(), addGameData);
router.get("/game/findGameList", findGameList);
router.get("/game/findPage", findPage);

// 添加路由中间件
app.use(router.routes());

app.listen(config.get("service.port"));