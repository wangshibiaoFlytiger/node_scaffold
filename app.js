import {config} from "config";

(async () => {
    let mongoClient = require("./mongo/mongoClient").mongoClient;

    let GameDao = require("./dao/gameDao");
    let gameDao = new GameDao();

    // 插入
    let Game = require("./model/game")
    let game = new Game({"title": "haha222"});
    await gameDao.insert(game);

    // 查询所有记录列表
    let gameList = await gameDao.findAll();
    console.log("查询所有记录完成, ", gameList);
    console.log(config);
})();
