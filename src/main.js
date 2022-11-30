const { hbs, hbsCompile } = require('./modules/hbs')
const { hbsEmailConfig, getConfig } = require('./config/config')
const path = require('path')
const templet  = require('./modules/templet')
const validate = require('./modules/validator')

const getTemplateFile = template => {

    const config = getConfig()

    const viewsPath = config.views
    const extName = config.extname

    if(!viewsPath && !extName) {
        //validate template path
        validate.template(template)
        return template
    }

    // if viewsPath doesn't exist but extName ( extension ) exist in config
    if(!viewsPath){
        const templateFile = template.concat(extName)
        validate.template(templateFile)
        return templateFile
    }

    const templateFile = path.join(viewsPath,template.concat(extName))
    validate.template(templateFile)
    return templateFile
    
}

const hbsEmail = ( template , context ) => {

    const templateFile = getTemplateFile(template)

    const emailTemplateSource = templet.reader(templateFile)
    
    const Compiler = hbsCompile(emailTemplateSource)

    const html = Compiler(context)

    return html
}

module.exports = {
    hbsEmail:hbsEmail,
    hbsEmailConfig:hbsEmailConfig,
    hbs:hbs,
    hbsCompile:hbsCompile,
    templet:templet
}