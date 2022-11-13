const { hbs, hbsCompile } = require('./modules/hbs')
const Templet  = require('./modules/templet')
const validate = require('./modules/validator')

const hbsEmail = ( template , context ) => {

    //validate template path
    validate.template(template)

    const emailTemplateSource = Templet.Reader(template)
    
    const Compiler = hbsCompile(emailTemplateSource)

    const html = Compiler(context)

    return html
}

module.exports = {
    hbsEmail:hbsEmail,
    hbs:hbs,
    hbsCompile:hbsCompile,
    Templet:Templet
}