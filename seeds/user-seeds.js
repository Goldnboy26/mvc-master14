const { User } = require('../models');

const userData = [
    {
        username: "xavi_hernandez",
        twitter: "xavher_x",
        github: "xavierhrz",
        email: "xavi_hernandez@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "matt_b",
        twitter: "mathewb",
        github: "mathewb",
        email: "mathew_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "shawn_c",
        twitter: "shawn",
        github: "shawn214",
        email: "shawnq12_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lee_n",
        twitter: "leenorris",
        github: "leenorris",
        email: "lee_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "Eduardo_M",
        twitter: "eduardzyzz23",
        github: "Goldnboy26",
        email: "enrique.monje1994@yahoo.com",
        password: "p@ssword5"
    },
    {
        username: "booja",
        twitter: "booja_w",
        github: "booja",
        email: "booja@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;