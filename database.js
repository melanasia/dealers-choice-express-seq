const {Sequelize, Model, DataTypes} = require('sequelize');

const sequelize = new Sequelize('postgres://localhost/acme_express_seq');

const Dive = sequelize.define('Dive', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    bestTime: DataTypes.STRING
})


async function init(){
    await sequelize.sync({force: true});
    
    await Dive.create({
        name: 'Great Blue Hole',
        location: 'Belize',
        bestTime: 'Peak season is between April and June'
    })
    
    await Dive.create({
        name: 'SS Yongala Wreck',
        location: 'Great Barrier Reef, Australia',
        bestTime: 'Peak season is between June and August'
    })
    
    await Dive.create({
        name: 'SS Thistlegorm Wreck',
        location: 'Red Sea, Egypt',
        bestTime: 'Peak season is between March and May / September and November'
    })
    
}

module.exports = {
    Dive,
    init
};