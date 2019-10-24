import {config} from "config";
let mongoClient = require("./mongo/mongoClient").mongoClient;

let GameDao = require("./dao/gameDao");
let gameDao = new GameDao();

let Game = require("./model/game")
let game = new Game({"title": "haha222"});
gameDao.insert(game);

let findAll = gameDao.findAll();
findAll.then(value => {
    console.log("查询所有记录完成, ", value);
})
console.log(mongoClient)
console.log(config);
console.log(config.get("apiPrefix"))
