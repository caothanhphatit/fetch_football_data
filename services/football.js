const config = require("../config/config")
const axios = require("axios")

const getTeam = async (params) => {
    const options = {
        method: 'GET',
        url: `${config.footBallHost}/teams/statistics`,
        params,
        headers: config.header
    };

    const { data } = await axios.request(options)
    return data;
}

// const getABC = async (params) => {
//     const options = {
//         method: 'GET',
//         url: `${config.footBallHost}/teams/statistics`,
//         params,
//         headers: config
//     };

//     const { data } = await axios.request(options)
//     return data;
// }

async function getABC(data) {

    var team = {

        id: data.id ,


    }

    saveToDb (team )
}

module.exports = {
    getTeam,
    getABC
}
