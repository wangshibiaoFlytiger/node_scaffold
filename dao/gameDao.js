/**
 * author: Shawn
 * time  : 2017/8/30 13:52
 * desc  :
 * update: Shawn 2017/8/30 13:52
 */

let BaseDao = require('./baseDao');
let Game = require('../model/game');


class GameDao extends BaseDao {
    constructor() {
        super(Game);
    }

    /**
     * 插入单条记录
     * @param game
     */
    async insert(game){
        try {
            let value = await super.save(game);
            console.log("插入单条记录, 完成, value:" + value);
        } catch (e) {
            console.error("插入单条记录, 异常", e);
        }
    }

    async findAll(){
         let all = await super.findAll();
         return all;
    }
}


// function test() {
//     let bookDao = new BookDao();
// let bookEntity = new Book({title: '三国', author: '罗贯中'});
// let bookEntity1 = new Book({title: '蓄势待发1', author: '麻花'});
// let bookEntity2 = new Book({title: '蓄势待发2', author: '麻花'});
// bookDao.create({title: '三国', author: '罗贯中'}).then((result) => console.log('create dao-->', result));
// bookDao.save({title: '三国', author: '罗贯中中'}).then((result) => console.log('save dao --> ', result));
// bookDao.update({title: '蓄势待发'}, {$set: {author: '开心'}}).then((result) => console.log('update dao--> ', result));
// bookDao.findOne({title: '蓄势待发'}).then((results) => console.log('findOne dao --> ', results));
// bookDao.findAll({title: '基督山伯爵'}).then((results) => console.log('findOne dao --> ', results));
// bookDao.remove({title: '蓄势待发'}).then((results) => console.log('remove dal --> ', results));
// }

module.exports = GameDao;