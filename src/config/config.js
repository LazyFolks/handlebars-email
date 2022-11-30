const fs = require("fs")
const path = require('path')

const hbsEmailConfig = ( config = {} ) => {
    const configFile = path.join(__dirname, "config.json")
    fs.writeFileSync(configFile, JSON.stringify(config))
}

const getConfig = () => {

    const configFile = path.join(__dirname, "config.json")

    if(!fs.existsSync(configFile)) return {}

    const rawData = fs.readFileSync(configFile)
    const config = JSON.parse(rawData)
    return config
} 


module.exports = {
    hbsEmailConfig: hbsEmailConfig,
    getConfig: getConfig
}