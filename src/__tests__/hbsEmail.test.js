const { hbsEmail, hbsEmailConfig, templet } = require('../main')

test('hbsEmail', () => {
    const template = hbsEmail('src/__tests__/assets/template.hbs', { message: "Hello World!" })
    const finalTemplate = templet.reader('src/__tests__/assets/finalTemplate.html')
    expect(template).toBe(finalTemplate)
})

test('hbsEmailConfig', () => {

    hbsEmailConfig({
        views: 'src/__tests__/assets/',
        extname: '.hbs'
    })

    const template = hbsEmail('template', { message: "Hello World!" })
    const finalTemplate = templet.reader('src/__tests__/assets/finalTemplate.html')
    expect(template).toBe(finalTemplate)
})