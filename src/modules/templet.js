const fs = require('fs')

const Reader = ( template, options = 'utf8' ) => fs.readFileSync(template, options)
const Writer = ( template, data, options ) => fs.writeFileSync( template, data, options )
const exists = template => fs.existsSync(template)

const canRead = template => {
    try {
        fs.accessSync(template, fs.constants.R_OK)
        return true
    } catch (error) {
        return false
    }
}
const canWrite = template => {
    try {
        fs.accessSync(template, fs.constants.W_OK)
        return true
    } catch (error) {
        return false
    }
}
const canExecute = template => {
    try {
        fs.accessSync(template, fs.constants.X_OK)
        return true
    } catch (error) {
        return false
    }
}


module.exports = {
    Reader:Reader,
    Writer:Writer,
    exists:exists,
    canRead:canRead,
    canWrite:canWrite,
    canExecute:canExecute
 }