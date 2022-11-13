const Templet  = require('./templet')
const path = require('path')

const validateTemplate = template => {

    const templatePath = path.resolve(template)

    // Check if template exist.
    if(!Templet.exists(template)) throw new Error(`ENOENT: template file doesn't exist. Please choose the correct template path. \n PATH: ${templatePath}`)

    // Check read permission.
    if(!Templet.canRead(template)) throw new Error(`EACCES: permission denied. Can't read template file. Please Check the template file permission. \n PATH: ${templatePath}`)
}

exports.template = validateTemplate